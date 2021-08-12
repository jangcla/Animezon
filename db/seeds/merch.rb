merch1 = Item.create!(name: "Gear 4th Monkey D. Luffy Snakeman version", type_tag: "merch", description: "A full anime figure replica of Monkey D. Luffy in his 4th gear transformation.", availability: true, price: 39.99)
merch1.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/wTjV3WqP5qkQnDzXhQWp3pNb"), filename: 'g4.jpeg')

merch2 = Item.create!(name: "Demon Slayer: Tanjiro's Hanafuda Earings", type_tag: "merch", description: "Replica metal earings, copying the exact look of the one Tanjiro wears in Demon Slayer", availability: true, price: 19.99)
merch2.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/Ug25rRT3rXsjRE9aH574nseU"), filename: 'ds-merch.jpeg')

merch3 = Item.create!(name: "Demon Slayer Poster ft. Zenitsu in thunder god form", type_tag: "merch", description: "A 42 by 30 inch poster of Zenitsu in his thunder god stance", availability: true, price: 14.99)
merch3.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/z8YGgbixniQDKLRQSnb7LWUm"), filename: 'ds-poster-merch.jpeg')

merch4 = Item.create!(name: "My Hero Aademia Black Graphic Tee", type_tag: "merch", description: "Only selling Large size, making the whole tee fit to be loose and baggy", availability: true, price: 24.99)
merch4.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/1BgKX5UQmLRtTEDo4er9Y45t"), filename: 'hero-merch.jpeg')

merch5 = Item.create!(name: "Jujutsu Kaisen character key chains", type_tag: "merch", description: "Jujutsu characters to take on the go as key chains!!!", availability: true, price: 9.99)
merch5.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/oWxgVaKGPsxhJJ63MsxeFTgf"), filename: 'jujutsu-merch.webp')

merch6 = Item.create!(name: "Jujutsu Kaisen: Itadori Yuuji Phone Case (pack of 2)", type_tag: "merch", description: "A vivid photo of Itaduri Yuuji on a phone case for you to take around. Comes in a pack of two and allows for you to switch between the two whenever needed.", availability: true, price: 14.99)
merch6.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/wkn1iQ1nNBQyegL3RY5AfAYx"), filename: 'jujutsu-phone-merch.jpeg')

merch7 = Item.create!(name: "Naruto and Sasuke Anime Figure Set of Two (Asura Gods Edition)", type_tag: "merch", description: "A collective set featuring both Sasuke and Naruto in battle form refering to the two japanese Gods of destruciton", availability: true, price: 99.99)
merch7.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/JQyUd2RNFTLYMNSLuo5BHhvm"), filename: 'naruto-figure-merch.webp')

merch8 = Item.create!(name: "Tokyo Ghoul: One Eyed Ghoul Gaming Mousepad", type_tag: "merch", description: "A wide area gaming mousepad featuring Kaneki Ken in his Ghoul form as the main design of the gaming mouse pad.", availability: true, price: 12.99)
merch8.photo.attach(io: open("https://animezon-dev.s3.us-west-1.amazonaws.com/c8R9rsjLU2CdsFZkJHgegcui"), filename: 'tokyo-mouse-pad.jpeg')

