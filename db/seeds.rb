# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
user1 = User.create({name: 'guest', email: 'guest@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user2 = User.create({name: 'ryan', email: 'ryan@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user3 = User.create({name: 'Aragorn', email: 'Aragorn@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user4 = User.create({name: 'Gandalf', email: 'Gandalf@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user5 = User.create({name: 'Legolas', email: 'Legolas@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user6 = User.create({name: 'Sauron', email: 'Sauron@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user7 = User.create({name: 'Gimli', email: 'Gimli@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})
user8 = User.create({name: 'Frodo', email: 'Frodo@sample.com', password: 'password', image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiaI-gohzE2_ynQhj6w0pWO3AT2KW44hI1x4lpBavKXRpmtXr7A"})

Location.destroy_all
Location.create({name: 'Minas Tirith', region:'Gonder', home_type:'Castle', description: 'Capital city of the kingdom of Gonder',
   price: 50, guests: 8, rooms: 2, beds: 8, bathrooms: 2, latitude: 0, longitude: 0, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
    user_id: user3.id})
Location.create({name: 'Helm\'s Deep ', region:'Rohan', home_type:'Castle', description: 'Fortress of Rohan', price: 250, guests: 5, rooms: 1,
    beds: 5, bathrooms: 4, latitude: 5, longitude: 5, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: user3.id})
Location.create({name: 'Tower of Orthanc', region:'Isengard', home_type:'Tower', description: 'Home of Saruman', price: 100, guests: 30, rooms: 10,
    beds: 25, bathrooms: 10, latitude: 10, longitude: 10, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: user4.id})
Location.create({name: 'Bag End', region:'The Shire', home_type:'Home', description: 'Quiet peaceful location filled with Hobbits', price: 25, guests: 1, rooms: 1,
    beds: 1, bathrooms: 1, latitude: 15, longitude: 15, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: user8.id})
Location.create({name: 'Mount Doom', region:'Mordor', home_type:'Castle', description: 'the fiery birthplace of the ring', price: 1000, guests: 1, rooms: 1,
    beds: 1, bathrooms: 1, latitude: 20, longitude: 20, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: user6.id})
Location.create({name: 'Rivendell', region:'Rivendell', home_type:'Home', description: 'Elrond\s home', price: 350, guests: 10, rooms: 5,
    beds: 5, bathrooms: 5, latitude: 25, longitude: 25, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: user4.id})
Location.create({name: 'Dwarrowdelf', region:'Mines of Moria', home_type:'Castle', description: 'Great hall of the dwarves', price: 100, guests: 20, rooms: 10,
    beds: 15, bathrooms: 3, latitude: 30, longitude: 30, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: 1})
Location.create({name: 'Edoras', region:'Region', home_type:'Estate', description: 'Realm of the horse lords', price: 100, guests: 6, rooms: 2,
    beds: 4, bathrooms: 2, latitude: 35, longitude: 35, image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60",
     user_id: 1})
