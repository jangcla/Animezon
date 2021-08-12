class Item < ApplicationRecord
    validates :name, :description, :price, presence: true

    has_one_attached :photo

    has_many :carts,
        foreign_key: :item_id,
        class_name: :Cart
end
