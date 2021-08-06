class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :type_tag
      t.string :description
      t.integer :price
      t.boolean :availability

      t.timestamps
    end
    add_index :items, :type_tag
    add_index :items, :name
  end
end
