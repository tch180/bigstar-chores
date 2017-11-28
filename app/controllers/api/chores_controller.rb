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

      def create 
        @chores = Chore.create!(chores_params)
        render json: Chore.all
      end
    
    
      def show
        @chores = Chore.all
        render json: @chores
      end
    
      def assignchore
        @parent = Parent.find(params[:parent_id])
        @parent.chores.create(chores_params)

      end
      
    
      def edit
      end


    private 
    def chores_params
      params.require(:chores).permit(:name, :points) 
    end
      
end