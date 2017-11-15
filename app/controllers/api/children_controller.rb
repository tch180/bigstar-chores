class Api::ChildrenController < ApplicationController
   
    def index
        @children = Child.all
        render json: @children
    end
    

    def create

    end
    def show
        
    end
     
end
