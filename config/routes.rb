Rails.application.routes.draw do
  root 'home#index'

  mount_devise_token_auth_for 'User', at: 'api/auth'

  get '*unmatched_route', to: 'home#index'
end
