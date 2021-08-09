# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Item.destroy_all

item1 = Item.create!(name: "test", type_tag: "anime", description: "test", availability: true, price: 1.99)
item1.photo.attach(io: File.open("/Users/johnangcla/Desktop/screenshots/test.jpeg"), filename: 'test.jpeg')
