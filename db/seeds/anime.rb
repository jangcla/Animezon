anime1 = Item.create!(name: "One Piece", type_tag: "anime", description: "The story of Monkey D. Luffy and his adventure to become the pirate king along with his crew of friends.", availability: true, price: 29.99)
anime1.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/onepiece.jpeg"), filename: 'onepiece.jpeg')

anime2 = Item.create!(name: "Bleach", type_tag: "anime", description: "Kurosaki Ichigo has always been able to see ghosts, but one day this ability causes for an unexpected change of his fate.", availability: true, price: 29.99)
anime2.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/bleach.jpeg"), filename: 'bleach.jpeg"')

anime3 = Item.create!(name: "Hunter x Hunter", type_tag: "anime", description: "Gon Freecs has always wanted to meet his father, so when the time came he leaves on an adventure to grow and find his father.", availability: true, price: 24.99)
anime3.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/hunter.jpeg"), filename: 'hunter.jpeg')

anime4 = Item.create!(name: "Naruto", type_tag: "anime", description: "Naruto Uzumaki has been the town fool for so long, discriminated and hated, the story follows the path of the young shinobi who strives to be the Hokage", availability: true, price: 24.99)
anime4.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/naruto.jpeg"), filename: 'naruto.jpeg')

anime5 = Item.create!(name: "Naruto Shippuden", type_tag: "anime", description: "The continuation of Naruto and a time skip into a couple years of the original anime, see the teen version of Naruto and his path to becoming one of the greatest ninjas who walked the lands.", availability: true, price: 29.99)
anime5.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/naruto-shipuden.jpeg"), filename: 'naruto-shipuden.jpeg')

anime6 = Item.create!(name: "Jujutsu Kaisen", type_tag: "anime", description: "The twist of fate that leads to Itadori Yuuji becoming the vessel of an old demonic god and the story of how he strives to conrol his fate", availability: true, price: 34.99)
anime6.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/jujutsu.jpeg"), filename: 'jujutsu.jpeg')

anime7 = Item.create!(name: "Air Gear", type_tag: "anime", description: "Air Gear is about the life of Itsuki Minami and his friends. The story follows their use of Air Trecks, an in-universe invention derived from inline skates.", availability: true, price: 29.99)
anime7.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/air-gear.jpeg"), filename: 'air-gear.jpeg')

anime8 = Item.create!(name: "Boku no My Hero Academia", type_tag: "anime", description: "The series focuses on a middle school student Izuku Midoriya, who has no superpowers. ... Academies across the globe train their students to learn to fight crime with their powers. Izuku Midoriya, a boy born without any powers, dreams of being able to become a super hero too, but gets bullied for his unrealistic dreams", availability: true, price: 34.99)
anime8.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/my-hero.jpg"), filename: 'my-hero.jpg')

anime9 = Item.create!(name: "Haikyuu", type_tag: "anime", description: "Hinata Shouyou, a short middle school student, gained a sudden love of volleyball after watching a national championship match on TV. Determined to become like the championship's star player, a short boy nicknamed the small giant, Shouyou joined his school's volleyball club.", availability: true, price: 29.99)
anime9.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/haikyuu.jpeg"), filename: 'haikyuu.jpeg')

anime10 = Item.create!(name: "Kuroko no Bosuke (Kuroko's Basketball)", type_tag: "anime", description: "A legendary 6th player. An up-and-coming power player, Taiga Kagami, is just back from America. When he comes to Seirin High School, he meets the super-ordinary boy, Tetsuya Kuroko. ... Kuroko makes a pact with Kagami to defeat the other members of the Miracle Generation, who have all played basketball at other schools.", availability: true, price: 19.99)
anime10.photo.attach(io: File.open("/Users/johnangcla/Desktop/animezon_imgages/kuroko.jpg"), filename: 'kuroko.jpg')

anime1 = Item.create!(name: "", type_tag: "anime", description: "", availability: true, price: 1)
anime1.photo.attach(io: File.open("/Users/johnangcla/Desktop/screenshots/test.jpeg"), filename: 'test.jpeg')