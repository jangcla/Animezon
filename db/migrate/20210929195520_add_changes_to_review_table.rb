class AddChangesToReviewTable < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :photo_Url, :string
  end
end
