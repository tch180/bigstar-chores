class RemoveAndUpdateParentFromChildren < ActiveRecord::Migration[5.1]
  def change
    remove_column :children, :Parent_id
    # remove_index :children, :Parent
    add_reference :children, :parent, foreign_key: true
  end
end
