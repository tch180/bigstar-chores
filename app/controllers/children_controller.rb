class ChildrenController < ApplicationController
   
    def index
        @child = Child.all
        render json: @child
    end
    

    def create

    end
    def delete
        
    end
     
end
