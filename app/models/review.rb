class Review < ApplicationRecord
  validates :title, :body, :rating, :author_id, :location_id, presence:true
  validates :rating, inclusion: {in: [1,2,3,4,5]}

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :location,
    foreign_key: :location_id,
    class_name: 'Location'
end
