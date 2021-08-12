class Addchangesforcart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :purchased
    add_column :carts, :purchased, :boolean
  end
end
