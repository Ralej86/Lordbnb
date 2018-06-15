class Location < ApplicationRecord
  validates :name, :description, :price, :guests, :rooms, :beds, :bathrooms,
            :latitude, :longitude, :user_id, presence:true
  validates :name, uniqueness:true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :reviews,
    foreign_key: :location_id,
    class_name: 'Review'


  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
  end

  def average_rating
    Integer(reviews.average(:rating))
  end
end
