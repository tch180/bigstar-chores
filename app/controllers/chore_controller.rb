class ChoreController < ApplicationController
  def index
    @chores = Chore.all
    render json: @chores
    
  end

  def show
    
  end

  def update
  end

  def edit
  end
end
