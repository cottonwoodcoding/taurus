Rails.application.routes.draw do
  root 'home#index'

  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :service_categories do
      resources :services
    end
  end

  get '*unmatched_route', to: 'home#index'
end
