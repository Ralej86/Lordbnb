class Location < ApplicationRecord
  validates :name, :description, :price, :guests, :rooms, :beds, :bathrooms,
            :latitude, :longitude, :user_id, presence:true
  validates :name, uniqueness:true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'
end
