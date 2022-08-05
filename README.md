# Animezon
<img alt="Animezon" width="100%" src="https://media.discordapp.net/attachments/964182254718963722/1005238342650171463/azone.PNG?width=817&height=468" />

[Animezon](https://animezon.herokuapp.com) is a full stack react clone of Amazon focusing on the commerce of all things related to anime, from Anime shows, Manga books, and merchendise assoscited with different manga and anime.

 ## Technologies Used
 
Animezon is built on a Javascript / React / Redux frontend, a Ruby/ Ruby on Rails backend, and a PostgreSQL database.

It also makes use of AWS S3 as the an online container for the item photos.
 
<img align="left" alt="Ruby" width="40px" src="https://cdn.iconscout.com/icon/free/png-256/ruby-47-1175102.png" />

<img align="left" alt="JavaScript" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

<img align="left" alt="React" width="47px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

<img align="left" alt="CSS3" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

<img align="left" alt="HTML5" width="40px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

<img align="left" alt="Redux" height="40px" src="https://raw.githubusercontent.com/jangcla/github-profile/3b4d2cde84319e2b6dc1b0a042ba2fb9199a6a35/profile-photos/redux-icon.svg" />

<img align='left' alt='ruby-rails' height='35px' src="https://github.com/jangcla/github-profile/blob/main/profile-photos/ruby-on-rails-icon.png?raw=true" />

<img align="left" alt="postgreSQL" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" />

<img align="left" alt="Node.js" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

<img align='left' alt='AWS' height='35px' src="https://github.com/jangcla/github-profile/blob/main/profile-photos/aws.png?raw=true" />

<img align='left' alt='heroku' width='35px' src="https://github.com/jangcla/github-profile/blob/main/profile-photos/heroku-icon.png?raw=true" />

<br />
<br />

## Features Highlight
### Splash page automatic slider
<img alt="splash slider" width="45%" src="https://cdn.discordapp.com/attachments/1005242216891027518/1005243007261495316/auto-slider-demo.gif" />

### User Create
<img alt="splash slider" width="45%" src="https://cdn.discordapp.com/attachments/1005242216891027518/1005243008997928991/create-account-demo.gif" />

## State & Database
### Redux Store State
<img alt="Redux State" width="45%" src="https://media.discordapp.net/attachments/964182254718963722/1005233269211660369/Screen_Shot_2022-07-21_at_6.45.17_PM.png" />
The Redux store uses a normalized state shape for a time complexity of O(1) when accessing data that's being updated, deleted, and/or rendered.
<br />
<br />
In addition to being accessible by their unique IDs, the items are set under the user and can still be accessed by when the current user is not logged in. The user entity is the main focus on an eCommerce website so the profile/reviews/carts/purchases fall under the user to optimize load times and lessen the fetch calls needed from the backend database.

### Database Schema
<img alt="DB Schema" width="45%" src="https://cdn.discordapp.com/attachments/964182254718963722/1005233269635293365/Screen_Shot_2022-07-25_at_2.08.03_PM.png" />

