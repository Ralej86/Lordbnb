class Api::LocationsController < ApplicationController
  before_action :logged_in?, only: [:create]
  def index
    @locations = Location.all
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
    params.require(:location).permit(:name, :description, :price, :guests,
      :rooms, :beds, :bathrooms, :latitude, :longitude)
  end
end
