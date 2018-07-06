class Booking < ApplicationRecord
  validates :guests, :guest_id, :start_date, :end_date, :location_id, presence:true
  before_validation :ensure_guests

  belongs_to :location,
    foreign_key: :location_id,
    class_name: 'Location'

  belongs_to :user,
    foreign_key: :guest_id,
    class_name: 'User'

  def ensure_guests
    self.guests ||= 1
  end
end
