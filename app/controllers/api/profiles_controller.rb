class Api::ProfilesController < ApplicationController
    before_action :require_logged_in

    def show
        @profile = Profile.find(params[:id])
    end

    def create
        @profile = Profile.new(profile_params)

        if @profile.save
            render :show
        else
            render json: @profile, status: :unprocessable_entity
        end
    end

    def index
        @profiles = Profile.all
        render :index
    end

    def update
        @profile = Profile.find(params[:id])

        if @profile.update(profile_params)
            render :show
        else
            redner json @profile.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile = Profile.find(params[:id])

        if @profile.destroy
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def profile_params
        params.require(:profile).permit(:name, :avatar_photo, :banner_photo, :bio, :user_id)
    end
end
