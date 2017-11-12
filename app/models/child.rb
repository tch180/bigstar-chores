class Child < ApplicationRecord
    belongs_to :Parent
    has_many :Chore
end
