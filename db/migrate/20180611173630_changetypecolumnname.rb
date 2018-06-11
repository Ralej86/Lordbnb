class Changetypecolumnname < ActiveRecord::Migration[5.2]
  def change
    rename_column :locations, :type, :home_type
  end
end
