class Api::ParentsController < ApplicationController
    def index
        @parents = Parent.all
        render json: @parents
        
    end
    def show 
        @parents = Chore.includes(:parent_id).order('chore.create_at Desc').find(params[:chores.id])
        
        render json: @chores
        render json: @parents
         render json: @child
    end
    def create
        @parents = Parent.create!(parent_params)
        # @parents.update!(parent_id: params[:parent_id])
        # @parents = Chore.includes(:child).order('chore.create_at Desc').find(params[:child_id])
        render json: Parent.all
    end
    def parent_params 
        params.require(:parents).permit(:name)
    end
end

