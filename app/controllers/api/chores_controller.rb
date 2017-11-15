class Api::ChoresController < ApplicationController
    def index
        @chores = Chore.all
        render json: @chores
      end
      
      def create
        @chores = Chore.new(chores_params)
        @chores.update!(parent_id: params[:child_id])
        @chores = Chore.includes(:chores).order
        render json: @chores
      end
    
      def update
        # update chore 
        
      end
    
    
      def show
        @chores = Chore.find(params[:parent_id])
    
      end
    
      
    
      def edit
      end
    
      
end