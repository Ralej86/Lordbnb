class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.integer :price, null:false
      t.integer :guests, null:false
      t.integer :rooms, null:false
      t.integer :beds, null:false
      t.integer :bathrooms, null:false
      t.float :latitude, null:false
      t.float :longitude, null:false
      t.string :image_url
      t.integer :user_id, null:false

      t.timestamps
    end
    add_index :locations, :user_id
    add_index :locations, :name, unique:true
  end
end
