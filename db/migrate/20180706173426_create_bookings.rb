class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :start_date, null:false
      t.date :end_date, null:false
      t.integer :guests, null:false
      t.integer :guest_id, null:false
      t.integer :location_id, null:false

      t.timestamps
    end
    add_index :bookings, :guest_id
    add_index :bookings, :location_id
  end
end
