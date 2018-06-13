class Location < ApplicationRecord
  validates :name, :description, :price, :guests, :rooms, :beds, :bathrooms,
            :latitude, :longitude, :user_id, presence:true
  validates :name, uniqueness:true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'


  def self.in_bounds(bounds)
    # debugger
    self.where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
  end


  # def self.in_bounds(bounds)
  #   self.where("lat < ? ", bounds[:northEast][:lat])
  #   .where("lat > ? ", bounds[:southWest][:lat])
  #   .where("lng < ? ", bounds[:southWest][:lng])
  #   .where("lng < ? ", bounds[:northEast][:lng])
  # end
end
