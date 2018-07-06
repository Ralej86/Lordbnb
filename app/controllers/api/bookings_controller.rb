class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = current_user.reviews.find_by)id: Integer(params[:id])
    if @booking.update_attributes(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
  end

  private
  def booking_params
    params.require(:booking).permit(:guests, :start_date, :end_date, :location_id)
  end
end
