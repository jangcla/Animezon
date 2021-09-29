class Profile < ApplicationRecord
    validates :name, :avatar_photo, :banner_photo, :bio, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
