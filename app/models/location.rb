class Location < ApplicationRecord
  validates :name, :description, :price, :guests, :rooms, :beds, :bathrooms,
            :latitude, :longitude, :user_id, presence:true
  validates :name, uniqueness:true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  def self.in_bounds(bounds)
    self.where("latitude < ? ", bounds[:northEast][:latitude])
    .where("latitude > ? ", bounds[:southWest][:latitude])
    .where("longitude < ? ", bounds[:southWest][:longitude])
    .where("longitude < ? ", bounds[:northEast][:longitude])
  end
end
