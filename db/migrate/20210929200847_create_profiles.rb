class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.string :avatar_photo, null: false
      t.string :banner_photo, null: false
      t.string :bio, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
