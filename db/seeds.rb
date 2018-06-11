# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create({name: 'guest', email: 'guest@sample.com', password: 'password'})
User.create({name: 'ryan', email: 'ryan@sample.com', password: 'password'})
User.create({name: 'Aragorn', email: 'Aragorn@sample.com', password: 'password'})
User.create({name: 'Gandalf', email: 'Gandalf@sample.com', password: 'password'})
User.create({name: 'Legolas', email: 'Legolas@sample.com', password: 'password'})
User.create({name: 'Sauron', email: 'Sauron@sample.com', password: 'password'})
User.create({name: 'Gimli', email: 'Gimli@sample.com', password: 'password'})
User.create({name: 'Frodo', email: 'Frodo@sample.com', password: 'password'})

Location.destroy_all
Location.create({name: 'Minas Tirith', description: 'Capital city of the kingdom of Gonder',
   price: 50, guests: 8, rooms: 2, beds: 8, bathrooms: 2, latitude: 0, longitude: 0, user_id: 1})
Location.create({name: 'Helm\'s deep ', description: 'Fortress of Rohan', price: 250, guests: 5, rooms: 1,
    beds: 5, bathrooms: 4, latitude: 5, longitude: 5, user_id: 1})
Location.create({name: 'Isengard', description: 'Home of Saruman the white', price: 100, guests: 30, rooms: 10,
    beds: 25, bathrooms: 10, latitude: 10, longitude: 10, user_id: 1})
Location.create({name: 'The Shire', description: 'Quiet peaceful location filled with Hobbits', price: 25, guests: 1, rooms: 1,
    beds: 1, bathrooms: 1, latitude: 15, longitude: 15, user_id: 1})
Location.create({name: 'Mount Doom', description: 'the fiery birthplace of the ring', price: 1000, guests: 1, rooms: 1,
    beds: 1, bathrooms: 1, latitude: 20, longitude: 20, user_id: 1})
Location.create({name: 'Rivendell', description: 'Elrond\s home', price: 350, guests: 10, rooms: 5,
    beds: 5, bathrooms: 5, latitude: 25, longitude: 25, user_id: 1})
Location.create({name: 'Moria', description: 'Great hall of the dwarves', price: 100, guests: 20, rooms: 10,
    beds: 15, bathrooms: 3, latitude: 30, longitude: 30, user_id: 1})
Location.create({name: 'Edoras', description: 'Realm of the horse lords', price: 100, guests: 6, rooms: 2,
    beds: 4, bathrooms: 2, latitude: 35, longitude: 35, user_id: 1})
