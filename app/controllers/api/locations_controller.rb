class Api::LocationsController < ApplicationController
  before_action :logged_in?, only: [:create]
  def index
    # debugger
    locations = Location.in_bounds(params[:bounds])
    # locations = params[:bounds] ? Location.in_bounds(params[:bounds]) : Location.all


    if params[:minSeating] && params[:maxSeating]
      locations = locations.where(seating: seating_range)
    end

    @locations = locations
    # debugger
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

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end
end
