class AddChangesToPurchasesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :purchases, :item_id
    add_column :purchases, :item_ids, :integer, array: true, default: []
  end
end


    # remove_column :items, :price
    # add_column :items, :price, :float