class Api::ChoresController < ApplicationController
    def index
        @chores = Chore.all
        @chores = Parent.find(params[:chore_id]).chores
        render json: @chores
      end
      
      # def create
      #   puts 'ROUTE HIT'
      #   # parent_id = params[:parent_id]
      #   # @children = child where(parent_id: parent_id)
      #   # child_id = params
      #   @parent = Parent.find(params[:parent_id])
      #   @chore = parent.chores.new(chores_params)
      #   @child = Child.find(request.body[:childId])
      #   @chore.child = @child
      #  if @chore.save!
      #   render json: @chore
      #  end
      # end
    
      def update
        # update chore 
        
      end
    
    
      def show
        @chores = Chore.find(params[:id])
    
      end
    
      
    
      def edit
      end


    private 
    def chores_params
      params.require(:chore).permit(:name, :points, :childId)
    end
      
end