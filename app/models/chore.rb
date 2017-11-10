class Chore < ApplicationRecord
    belongs_to :Children
    belongs_to :Parent
end
