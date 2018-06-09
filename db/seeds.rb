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
User.create({name: 'Theoden', email: 'Theoden@sample.com', password: 'password'})
User.create({name: 'Elrond', email: 'Elrond@sample.com', password: 'password'})

Location.destroy_all
Location.create({name: 'Prancing Pony Inn', description: 'A comfy inn',
   price: 50, guests: 8, rooms: 2, beds: 8, bathrooms: 2, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
Location.create({name: '', description: '', price: 0, guests: 0, rooms: 0,
    beds: 0, bathrooms: 0, latitude: 0, longitude: 0, user_id: 0})
