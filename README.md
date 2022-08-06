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
### User 
<img alt="user demo" width="45%" src="https://cdn.discordapp.com/attachments/1005242216891027518/1005243008997928991/create-account-demo.gif" />
Animezon allows you - the user, to view and browse through items without the use of an account. However, for actions such as adding items to the cart, checking out an item in the cart, creating and customizing a user profile, and leaving reviews, the user needs to create an account. 
<br />
(A demo account is accessible for the user on the sign up page as well.)

### Profile 
<img alt="profile demo" width="45%" src="https://cdn.discordapp.com/attachments/1005242216891027518/1005552911532703824/ezgif-4-06e0bef686.gif" />
A user is able to create a customized profile to showcase their individuality. The profile function is a person's view page for all their personal reviews on items found on the website. It is customizable and can be edited and changed when the user is logged in.

### Cart
<img alt="cart demo" width="45%" src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/cart-demo.gif?raw=true" />
The cart function allows the user to add items they deem fit for purchase into an online basket. This basket contains and displays all previously added and created cart items, to either edit or delete. The cart function also has a randomizer to select items for the customer to view if they want similar items in their cart.

### Checkout
<img alt="checkout demo" width="45%" src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/checkout-demo.gif?raw=true" />
The checkout function is created in order to create a list of purchased items for users to be have a sensation of purchasing. No real currency or delivery is actually made on the account and only serves the purpose of emulating the purchasing aspect of an eCommerce website. 
<br />
<br />
( The next implementation and update is to create a proper display page for all user purchases. )

### Review
<img alt="review demo" width="45%" src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/review-demo.gif?raw=true" />
The creation of the review is one of the main aspects of an eCommerce website. The ability to leave reviews allow the users to be able to express their feelings towards a previously purchased item. All user made reviews can be viewed and checked on the reviewer's personal profile page. 
<br />
<br />
( The next update and implementation for the review function is to add comments under the person's review. )

### Search
<img alt="search demo" width="45%" src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/search-demo.gif?raw=true" />
The implementation of the search function is made with React functional components ("React Hooks"), which was implemented with the purpose to learn and develop new technologies into my project. The creation of the search functionality was a great introduction and practice into the world of react hooks. The search functionality uses a customized filtering on the frontend of the webpage and runs in a linear output O(n). 
<br />
<br />
(The next implementation and update is to create a backend query on the database to filter search items on the backend first, which continues to filter on the frontend portion of the application, in order to reduce the space and time complexity of the filtering of items.)

### Automated carousel
<img alt="splash slider" width="45%" src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/auto-slider-demo.gif?raw=true" />
The automated carousel is the outcome of my personal attempt at creating a react class component automatic function. This project presents my very first attempt at deconstructing different ideas from a css implementation that is combined to a functional state rerendering and mounting technologies. This component was one of the most satisfying "aha" moments of the project because it presented to me one of my earlier epiphany moments that further developed my love for building cool technologies with software development.
<br />
<br />

```
class PhotoSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 1
        }

        this.clickRight = this.clickRight.bind(this);
        this.clickLeft = this.clickLeft.bind(this);
        this.startSlides = this.startSlides.bind(this);
    }

    componentDidMount() {
        this.time = setInterval(this.startSlides, 5000);
    }

    startSlides() {
        let counter = this.state.count;
        counter++;
        if (counter > 4) counter = 1;

        let slide = document.getElementById('radio' + counter)
        slide.checked = true;

        this.setState({
            "count" : counter
        })
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    clickRight(e) {
        e.preventDefault();

        clearInterval(this.time);
        const val = this.state.count + 1  > 4 ? 1 : this.state.count + 1;
        let slide = document.getElementById('radio' + val);
        slide.checked = true;
        this.setState({
            "count" : val
        })
    }

    clickLeft(e) {
        e.preventDefault();

        clearInterval(this.time);
        const val = this.state.count - 1 < 1 ? 4 : this.state.count - 1;
        let slide = document.getElementById('radio' + val);
        slide.checked = true;
        this.setState({
            "count": val
        })
    }
```

## State & Database
### Redux Store State
<img alt="Redux State" width="45%" src="https://media.discordapp.net/attachments/964182254718963722/1005233269211660369/Screen_Shot_2022-07-21_at_6.45.17_PM.png" />
The Redux store uses a normalized state shape for a time complexity of O(1) when accessing data that's being updated, deleted, and/or rendered.
<br />
<br />
In addition to being accessible by their unique IDs, the items are set under the user and can still be accessed when the current user is not logged in. The user entity is the main focus on an eCommerce website so the profile/reviews/carts/purchases fall under the user to optimize load times and lessen the fetch calls needed from the backend database.

### Database Schema
<img alt="DB Schema" width="45%" src="https://cdn.discordapp.com/attachments/964182254718963722/1005233269635293365/Screen_Shot_2022-07-25_at_2.08.03_PM.png" />

