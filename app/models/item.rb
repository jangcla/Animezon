class Item < ApplicationRecord
    validates :name, :description, :price, presence: true

    has_one_attached :photo
end
