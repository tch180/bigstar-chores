class Api::ChoresController < ApplicationController
    def index
        @chores =Chore.all
        render json: @chores
    end