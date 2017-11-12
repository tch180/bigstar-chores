class AddParentIdToChore < ActiveRecord::Migration[5.1]
  def change
    add_reference :chores, :parent, foreign_key: true
  end
end
