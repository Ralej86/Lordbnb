class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence:true
  validates :email, :session_token, uniqueness:true
  validates :password, length: {minimum: 6, allow_nil:true}

  has_many :locations,
    foreign_key: :user_id,
    class_name: 'Location'

  has_many :reviews,
    foreign_key: :author_id,
    class_name: 'Review'

  has_many :bookings,
    foreign_key: :guest_id,
    class_name: 'Booking'

  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
