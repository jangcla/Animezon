class Api::ItemsController < ApplicationController
    def show
        @item = Item.find_by(id: params[:id])

        if @item
            render :show
        else
            render json: ['Item not available']
        end

    end

    def index
        items = Item.all
        render :index
    end

end
