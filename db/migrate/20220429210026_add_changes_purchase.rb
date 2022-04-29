class AddChangesPurchase < ActiveRecord::Migration[5.2]
  def change
    remove_column :purchases, :item_ids
    add_column :purchases, :item_id, :integer
  end
end
