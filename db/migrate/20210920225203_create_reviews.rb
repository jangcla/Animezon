class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.integer :rating, null: false
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      
      t.timestamps
    end
  end
end
