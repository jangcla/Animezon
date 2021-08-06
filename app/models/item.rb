class Item < ApplicationRecord
    validates :name, :description, :price, presence: true

    has_many_attached :photo
end
