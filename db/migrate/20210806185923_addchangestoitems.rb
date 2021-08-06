class Addchangestoitems < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :price
    add_column :items, :price, :float
  end
end
