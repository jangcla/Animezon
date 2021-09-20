class AddChangesToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :name, :string, null: false
  end
end
