class Api::CartsController < ApplicationController
    before_action :require_logged_in

    def create
        @cart = Cart.new(cart_params)

        if @cart.save
            render :show
        else
            render json: @cart, status: :unprocessable_entity
        end
    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy

        render :show
    end

    def cart_params
        params.require(:cart).permit(:user_id, :item_id, :quantity, :purchased)
    end
end
