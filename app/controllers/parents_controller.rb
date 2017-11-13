class ParentsController < ApplicationController
    def index
        @parents = Parent.all
        render json: @parents
        
    end
    def show 
        @parents = Parent.find(params[:chores_id])
        render json: @chores
        render json: @parents
        # render json: @child
    end
    def create
        @parents = Child.new(child_params)
        @parents.update!(child_id: params[:child_id])
        @parents = Chore.includes(:child).order('chore.create_at Desc').find(params[:child_id])
    end
end

