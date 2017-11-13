Rails.application.routes.draw do
  namespace :api do
    resources :parents, only: [:index, :show, :create] do
      resources :chore, only: [:index, :show, :create, :destroy] do
       
        

  
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
end
end
end

