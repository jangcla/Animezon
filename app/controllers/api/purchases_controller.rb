class Api::PurchasesController < ApplicationController

    def show
        @purchase = Purchase.find(params[:id])
    end

    def create
        @purchase = Purchase.new(purchase_params)

        if @purchase.save
            render :show
        else
            render json: @purchase, status: :unprocessable_entity
        end
    end

    def index
        @purchase = Purchase.all
        render :index
    end

    def update
        @purchase = Purchase.find(params[:id])

        if @purchase.update(purchase_params)
            render :show
        else
            render json: @purchase.errors.full_messages, status: 422
        end
    end

    def destroy
        @purchase = Purchase.find(params[:id])

        if @purchase.destroy
            render :show
        else
            render json: @purchase.errors.full_messages, status: 422
        end
    end

    def purchase_params
        params.require(:purchase).permit(:user_id, :item_id)
    end
end
