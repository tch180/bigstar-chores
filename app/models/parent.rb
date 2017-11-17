class Parent < ApplicationRecord
    has_many :chores, dependent: :destroy 
    has_many :children, dependent: :destroy 
    
end
