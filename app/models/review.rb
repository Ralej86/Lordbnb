class Review < ApplicationRecord
  validates :title, :body, :rating, :author_id, :location_id, presence:true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :location,
    foreign_key: :location_id,
    class_name: 'Location'
end
