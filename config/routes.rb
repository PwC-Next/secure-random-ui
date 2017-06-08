Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :hashes, only: [:index]
  post 'get_hashes', to: 'hashes#get_hashes'
  root 'hashes#index'
end
