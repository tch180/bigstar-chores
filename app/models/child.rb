class Child < ApplicationRecord
    belongs_to :parent, optional: true
    has_many :chores
    
end
