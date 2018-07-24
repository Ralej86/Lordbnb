class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      if @booking.start_date > @booking.end_date
        render json: ['Booking check in should come before end date'], status: 422
      elsif @booking.end_date < @booking.start_date
        render json: ['Booking end date should come after check in date'], status: 422
      else
        render json: @booking.errors.full_messages, status: 422
      end
    end
  end

  # def update
  #   @booking = current_user.reviews.find_by(id: Integer(params[:id]))
  #   if @booking.update_attributes(booking_params)
  #     render :show
  #   else
  #     render json: @booking.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:guests, :start_date, :end_date, :location_id, :guest_id)
  end
end
