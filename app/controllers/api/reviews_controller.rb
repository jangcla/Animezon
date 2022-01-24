class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:title, :rating, :body, :user_id, :item_id, :name, :photo_Url)
    end
end
