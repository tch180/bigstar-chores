class AddChildIdToChore < ActiveRecord::Migration[5.1]
  def change
    add_reference :chores, :child, foreign_key: true
  end
end
