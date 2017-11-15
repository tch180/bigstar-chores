Rails.application.routes.draw do
  namespace :api do

    resources :parents, only: [:index, :show, :create] do
    end
      #  resources :child, only: [:index, :create, :show] do 

        
        
          
       
    end
    namespace :api do 
      resources :chores, only: [:index, :show, :create, :destroy] do
      end
  end
  namespace :api do 
    resources :children, only: [:index, :create, :show]
end
end

