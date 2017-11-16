class Api::ChoresController < ApplicationController
    def index

         @chores = Chore.all
        # @parent = Parent.find_by_id(params[:parent_id])
        # @chores = @parent.chores
        # chores_response = @chores.map do |parent|
        #   {
        #     parent: chores.parent,
        #     parent: parent
        #   } 
        # end
       
        render json: @chores
      end
      def special
        @parent = Parent.find_by_id(params[:parent_id])
         @chores = @parent.chores
       render json: @chores
      end
    
      def update
         
        
      end
    
    
      def show
        @chores = Chore.all
        render json: @chores
      end
    
      
    
      def edit
      end


    private 
    def chores_params
      params.require(:chore).permit(:name, :points, :childId)
    end
      
end