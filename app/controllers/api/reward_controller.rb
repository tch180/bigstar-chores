class Api::RewardController < ApplicationController
    
    def show 
        @rewards = Rewards.all
        render json: @rewards
    
end