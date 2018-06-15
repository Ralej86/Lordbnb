class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: Integer(params[:id]))
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :location_id, :author_id)
  end
end
