Rails.application.routes.draw do
  namespace :api do

    resources :parents, only: [:index, :show, :create] do
      resources :chores, only: [:index, :show, :create, :destroy] do
      #  resources :child, only: [:index, :create, :show] do 

        
        
          
       end
    end
  end
  namespace :api do 
    resources :children, only: [:index, :create, :show]
end
end

