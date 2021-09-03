class AddChangesToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :title, :string
    add_column :carts, :photoUrl, :string
    add_column :carts, :price, :float
  end
end
