Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :items, only: [:show, :index]
    resources :carts, only: [:create, :show, :index, :update, :destroy]
    resources :reviews, only: [:create, :show, :index, :update, :destroy]
    resources :profiles, only: [:create, :show, :index, :update, :destroy]
    resources :purchases, only: [:create, :show, :index, :update, :destroy]
  end

end
