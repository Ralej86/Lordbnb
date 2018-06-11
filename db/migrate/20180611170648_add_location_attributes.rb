class AddLocationAttributes < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :region, :string, null:false
    add_column :locations, :type, :string, null: false
  end
end
