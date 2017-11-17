class Api::ChildrenController < ApplicationController
   
    def index
        @children = Child.all
        render json: @children
    end
    

    def create
          @children = Child.create!(child_params)
          render json: Child.all
    end


    def show
        
        @children = Child.joins(:parent).includes(:parent).find_by_id(params[:id])
        child_response = {
            parent_name: @children.parent.name,
            child_name: @children.name
        }
        render json: child_response
        # render json: @children, include: [:parents]
    end
    def child_params
        params.require(:child).permit(:name)
    end
     
end
