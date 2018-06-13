class Api::LocationsController < ApplicationController
  before_action :logged_in?, only: [:create]
  def index
    @locations = params[:bounds] ? Location.in_bounds(params[:bounds]) : Location.all
    render :index
  end

  def show
    @location = Location.find_by(id: params[:id])
    render :show
  end

  def create
    @location = Location.new(location_params)
    @location.user_id = current_user.id
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  private
  def location_params
    params.require(:location).permit(:name, :region, :home_type, :description, :price, :guests,
      :rooms, :beds, :bathrooms, :latitude, :longitude, :image_url)
  end
end
