class Chore < ApplicationRecord
    belongs_to :child, optional: true
    belongs_to :parent, optional: true
end
