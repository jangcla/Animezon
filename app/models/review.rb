class Review < ApplicationRecord
    validates :user_id, :item_id, :title, :rating, :body, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :item,
        foreign_key: :item_id,
        class_name: :Item

end
