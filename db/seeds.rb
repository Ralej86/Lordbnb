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
user3 = User.create({name: 'Aragorn', email: 'Aragorn@sample.com', password: 'password', image_url:"https://cdn.empireonline.com/jpg/70/0/0/640/480/aspectfit/0/0/0/0/0/0/c/articles/5afcbbb7c1eec0c91e26b804/aragorn-lord-rings.jpg"})
user4 = User.create({name: 'Gandalf', email: 'Gandalf@sample.com', password: 'password', image_url:"https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436"})
user5 = User.create({name: 'Legolas', email: 'Legolas@sample.com', password: 'password', image_url:"https://vignette.wikia.nocookie.net/edain-mod/images/d/da/Legolas_portrait_-_EmpireMag.jpg/revision/latest?cb=20160121163945"})
user6 = User.create({name: 'Sauron', email: 'Sauron@sample.com', password: 'password', image_url:"https://vignette.wikia.nocookie.net/villains/images/c/c1/Eye_of_Sauron.jpg/revision/latest?cb=20171214201353"})
user7 = User.create({name: 'Gimli', email: 'Gimli@sample.com', password: 'password', image_url:"https://vignette.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png/revision/latest?cb=20121008105956"})
user8 = User.create({name: 'Frodo', email: 'Frodo@sample.com', password: 'password', image_url:"https://cdn.costumewall.com/wp-content/uploads/2017/06/frodo-baggins.jpg"})

Location.destroy_all
loc1 = Location.create({name: 'Minas Tirith', region:'Gondor', home_type:'City',
  description: "Minas Tirith is the seat of the throne of Gondor, the ancient kingdom of men.  The steward of Gondor now rules.",
  price: 50, guests: 8, rooms: 2, beds: 8, bathrooms: 2, latitude: 37.776381, longitude: -122.433815, image_url: "http://www.patriotresource.com/lotr/pics/locations/minastirith.jpg", user_id: user3.id})
loc2 = Location.create({name: 'Helm\'s Deep ', region:'Rohan', home_type:'Castle', description: 'Fortress of Rohan where all people can take shelter during times of war.  It has large stone features such as a keep and a tower the holds the great horn of Helm Hammerhand. The Deeping wall is about 20 feet high and offers much security to anyone residing here.',
  price: 250, guests: 5, rooms: 1, beds: 5, bathrooms: 4, latitude: 37.796865, longitude: -122.425705,
  image_url: "http://www.gandex.ru/upl/oboi/gandex.ru-18080_9854_Fantasticworld021.jpg", user_id: user3.id})
loc3 = Location.create({name: 'Tower of Orthanc', region:'Isengard', home_type:'Tower',
  description: 'Home of Saruman.  Beware of all the orcs residing in the area now that Saruman started breeding them.  There used to be lush forest here but since Saruman turned evil, he has cut down the trees.  This might have some unforseen consequences.',
  price: 100, guests: 30, rooms: 10, beds: 25, bathrooms: 10, latitude: 37.797030, longitude: -122.433671,
  image_url: "https://wallup.net/wp-content/uploads/2015/12/193693-Isengard-fantasy_art-forest-mountain-tower-water-landscape-Orthanc-748x421.jpg",
     user_id: user4.id})
loc4 = Location.create({name: 'Bag End', region:'The Shire', home_type:'Home',
  description: 'Quiet peaceful location filled with Hobbits.  Bag End is located at the end of Bagshot Row in Hobbiton, West Farthing, The Shire. It is the home of Bilbo Baggins who lives with his young nephew Frodo Baggins.',
   price: 25, guests: 1, rooms: 1,beds: 1, bathrooms: 1, latitude: 37.804028, longitude: -122.468067,
   image_url: "https://images.unsplash.com/photo-1523593288094-3ccfb6b2c192?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c628d79d2e001c772fad8697f3b386c5&auto=format&fit=crop&w=657&q=80",
    user_id: user8.id})
loc5 = Location.create({name: 'Mount Doom', region:'Mordor', home_type:'Castle', description: 'Mount Doom is located in Mordor, The fiery birthplace of the one ring.  Beware there is a lot of lava here.',
   price: 1000, guests: 1, rooms: 1, beds: 1, bathrooms: 1, latitude: 37.799990, longitude: -122.409886, image_url: "https://www.artsfon.com/pic/201804/1366x768/artsfon.com-168816.jpg",
     user_id: user6.id})
loc6 = Location.create({name: 'Rivendell', region:'Rivendell', home_type:'Home', description: 'Rivendell is the home of Elrond Half-elven and his daughter Arwen Evenstar. It is a refuge from the growing evil in Middle Earth.',
   price: 350, guests: 10, rooms: 5, beds: 5, bathrooms: 5, latitude: 37.798820, longitude: -122.401289, image_url: "https://wallpapercave.com/wp/wp1947158.jpg",
     user_id: user4.id})
loc7 = Location.create({name: 'Dwarrowdelf', region:'Mines of Moria', home_type:'Castle', description: 'Dwarrowdelf is the ancient Dwarven city of Moria. Dwarrowdelf is characterized by the huge columns that the Dwarves fashioned out of the mountain.  Vast spaces and rooms spread throughout the area.',
   price: 100, guests: 20, rooms: 10, beds: 15, bathrooms: 3, latitude: 37.795479, longitude: -122.406344, image_url: "http://i.ytimg.com/vi/QrB-v74jork/maxresdefault.jpg",
     user_id: user7.id})
loc8 = Location.create({name: 'Edoras', region:'Rohan', home_type:'Home', description: 'Edoras is the mountaintop capital of Rohan. The Golden Hall of the King is located at the highest point of the city.',
   price: 100, guests: 6, rooms: 2, beds: 4, bathrooms: 2, latitude: 37.542354, longitude: -122.294353,
    image_url: "https://vignette.wikia.nocookie.net/lotr/images/2/2e/Edoras.jpg/revision/latest?cb=20100325163858",
     user_id: user4.id})
loc9 = Location.create({name: 'Caras Galadon', region: 'Lothlórien', home_type: 'City',
  description: "Caras Galadon is a beautiful city of trees located in the heart of Lothlórien. It is the home of Lord Celeborn and Lady Galadriel and where the Mirror of Galadriel is found.",
  price: 250, guests: 12, rooms: 6, beds: 12, bathrooms: 1, latitude: 37.770157, longitude: -122.464671,
  image_url: "https://img00.deviantart.net/c607/i/2015/030/9/f/caras_galadhon_by_gwillieth-d8fzc4x.jpg", user_id: user5.id
  })
loc10 = Location.create({name: 'Cirith Ungol', region: 'Mordor', home_type: 'Castle',
  description: "Cirith Ungol Tower guards the Pass of Cirith Ungol. It was built after the Battle of Dagorlad as a Gondorian watchtower, but fell to Sauron as his power returned. The pass is located above Minas Morgul. It is far more accessible than Black Gate and Minas Morgul as an entrance to Mordor.",
  price: 500, guests: 90, rooms: 30, beds: 95, bathrooms: 43, latitude: 37.802431, longitude: -122.449693,
  image_url: "https://cdna.artstation.com/p/assets/images/images/006/553/624/large/karakter-design-studio-kar-cirithungol-warmonger.jpg?1499462818",
  user_id: user6.id
  })
loc11 = Location.create({name: 'Prancing Pony Inn', region: 'Bree', home_type: 'Inn',
  description: "The Prancing Pony Inn caters to all guests.  Has a great variety of beers and a spacious area to hang out with friends.  Even the Hobbits are welcome here.",
  price: 25, guests: 5, rooms: 1, beds: 5, bathrooms: 1, latitude: 37.787779, longitude: -122.408300,
  image_url: "https://3.bp.blogspot.com/-dWkfcCbn-64/ViEmkZoe9qI/AAAAAAAAKgU/mJjpj1ApUDA/w1200-h630-p-k-no-nu/Ted%2BNasmith%2BAt_the_Sign_of_the_Prancing_Pony.jpg",
  user_id: user4.id
  })
loc12 = Location.create({name: 'Minas Morgul', region: 'Mordor', home_type: 'Castle',
  description: "Minas Morgul was once known as Minas Ithil, when it was still a part of the kingdom of Gondor. It had been the sister city to Minas Tirith. Now it is the home of the Nazgûl.",
  price: 750, guests: 9, rooms: 1, beds: 1, bathrooms: 1, latitude: 37.794127, longitude: -122.397849,
  image_url: "https://cdna.artstation.com/p/assets/images/images/007/660/790/large/wardenlight-studio-wardenlight-blur-shadow-of-war-minasmorgul.jpg?1507671311",
  user_id: user6.id
  })

Review.destroy_all
rev1 = Review.create({title:"Beautiful Place" , body:"The White tree is an unexpected beauty.  I would stay here forever." , rating: 5, author_id:user3.id , location_id:loc1.id })
rev2 = Review.create({title:"This place sucks" , body:"I want to destroy this place." , rating: 5, author_id:user6.id , location_id:loc1.id })
rev3 = Review.create({title:"Nice locale" , body:"I had a great time here, however the previous guests seemed to left this place in ruins." , rating: 3, author_id:user4.id , location_id:loc1.id })

rev4 = Review.create({title:"Wow" , body:"The walls here really block out any outside noise/intrusion." , rating: 4, author_id:user3.id , location_id:loc2.id })
rev5 = Review.create({title:"Too high" , body:"I feel like I need a box to see over anything." , rating: 3, author_id:user7.id , location_id:loc2.id })
rev6 = Review.create({title:"Excellent" , body:"Had a couple buddies come over and it was great.  However I felt bad for my short friend who couldn\'t see anything" , rating: 4, author_id:user5.id , location_id:loc2.id })

rev7 = Review.create({title:"What happened?" , body:"This is not the place it used to be." , rating: 1, author_id:user8.id , location_id:loc3.id })
rev8 = Review.create({title:"Is there a new host?" , body:"I dont recognize this place anymore.  I was friends with the old host, where is he?" , rating: 1, author_id:user4.id , location_id:loc3.id })
rev9 = Review.create({title:"Great place" , body:"I'm enjoying the change of scenery and the new host." , rating: 5, author_id:user6.id , location_id:loc3.id })

rev10 = Review.create({title:"Homely" , body:"The ceilings are a little low but I enjoyed my time here." , rating: 5, author_id:user4.id , location_id:loc4.id })

rev11 = Review.create({title:"Hard to get to" , body:"I found it extremely difficult to get here.  But once I was here I almost didn\'t want to leave." , rating: 3, author_id:user8.id , location_id:loc5.id })
rev12 = Review.create({title:"AVOID THIS PLACE" , body:"Don\'t ever come here." , rating: 1, author_id:user4.id , location_id:loc5.id })

rev13 = Review.create({title:"Nice and quiet" , body:"I like to come here and relax.  It\'s a nice place to come to." , rating: 4, author_id:user4.id , location_id:loc6.id })
rev14 = Review.create({title:"Fantastic" , body:"I love this place.  The host\'s daughter is really nice to me." , rating: 5, author_id:user3.id , location_id:loc6.id })

rev15 = Review.create({title:"Dark and dreary" , body:"I think elves have better homes." , rating: 3, author_id:user5.id , location_id:loc7.id })
rev16 = Review.create({title:"Weird" , body:"When we were staying here we were interrupted by someone renting out the basement.  He was quite rude." , rating: 1, author_id:user4.id , location_id:loc7.id })
rev17 = Review.create({title:"Bad neighborhood" , body:"I am not a huge fan of the neighbors, otherwise it was okay." , rating: 2, author_id:user8.id , location_id:loc7.id })

rev18 = Review.create({title:"Awesome" , body:"They have beautiful horses here." , rating: 4, author_id:user5.id , location_id:loc8.id })
rev19 = Review.create({title:"Nice" , body:"This place almost feels like home." , rating: 5, author_id:user3.id , location_id:loc8.id })

rev20 = Review.create({title:"Never Coming Back" , body:"I got extremely bad allergies from the trees here." , rating: 2, author_id:user7.id , location_id:loc9.id })
rev21 = Review.create({title:"Interesting" , body:"This place had nice accomodations.  The host was a really welcoming to us." , rating: 4, author_id:user8.id , location_id:loc9.id })

rev22 = Review.create({title:"Dirty" , body:"I would not reccomend this place.  The people who live here don\'t clean up after themselves." , rating: 2, author_id:user8.id , location_id:loc10.id })

rev23 = Review.create({title:"Accomodating" , body:"This place was nice to us.  They even had rooms for us smaller people." , rating: 5, author_id:user8.id , location_id:loc11.id })
rev24 = Review.create({title:"Nice quiet place" , body:"I like to come here and just relax." , rating: 5, author_id:user3.id , location_id:loc11.id })

rev25 = Review.create({title:"Cool" , body:"I came here very briefly and enjoyed the architecture of the entrace." , rating: 3, author_id:user8.id , location_id:loc12.id })
