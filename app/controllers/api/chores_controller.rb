class Api::ChoresController < ApplicationController
    def index
        @chores = Chore.all
        # @chores = Parent.find(params[:chore_id]).chores
        render json: @chores
      end
      
    
      def update
         
        
      end
    
    
      def show
        @chores = Chore.all
    
      end
    
      
    
      def edit
      end


    private 
    def chores_params
      params.require(:chore).permit(:name, :points, :childId)
    end
      
end