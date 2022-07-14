import React, { useEffect, useState } from "react";
import Navbar from "../nav/navbar";
import { Link } from "react-router-dom";

const InfoPage = ({infoWord}) => {
    const [feature, setFeature] = useState("splash");

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const updateFeature = (e) => {
        const target = e.currentTarget.value;

        setFeature(target);
    }

    const infoFeatures = {
        splash: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/info-logo.png?raw=true", 
            "Welcome to the features informational page of animezon. To understand the useable features of the website, either explore on your own or select one of the feature buttons above."],
        slider: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/auto-slider-demo.gif?raw=true", 
            "On the home page of the website, we can see an automatic photo slider that features an on hover effect. When hovering on the banner, the user is presented with a preview of the product video. Once the banner is clicked, the user is then redirected on to the proper product view page."],
        cart: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/cart-demo.gif?raw=true",
            "The cart function is used to add, edit and delete possible item purchases onto the cart. With this function, we are able to simulate and display the cart function that Amazon has to offer it's users."],
        search: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/search-demo.gif?raw=true",
            "With the help of React hooks, Animezon was able to emulate the search bar function that Amazon has to offer. The search function can search either using title names or the different types of items whether it be anime, manga, or merchendise"],
        checkout: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/checkout-demo.gif?raw=true",
            "The checkout functional component is the following continuation of the cart function. Where the cart function emulates the adding of items to the cart, the checkout function creates new items that the user has purchased over time."],
        account: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/create-account-demo.gif?raw=true",
            "Animezon allows users to search and view items on the website, but in order to write reviews, add items to cart, purchase items, and even customize one's profile, an account is first needed. To make an account find the accounts and links button on the navbar and signup or login to an account"],
        profile: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/profile-demo.gif?raw=true",
            "The creation of the user account gives any animezon user a default profile page. But if the user wishes to add another layer personaliztion, one can create a profile page in which other users can see their reviews as well as personalized profile page"],
        review: ["https://github.com/jangcla/Animezon/blob/info/photos/info-photos/review-demo.gif?raw=true", 
            "As with any e-commerce website the user is able to leave behind reccomendations to other users with the review function. Emulating amazon's reviews system, the user once logged in is able to leave behind a rating ang comment on the product of choice for other users to view either on the product view page or the user profile page"]
    }

    const animezonInfo = (
        <div id="info-about-animezon">
            <div id="animezon-background-text">
                Animezon is a fullstack clone of e-commerce website Amazon. This website is the culmination of technologies and techniques I learned
                during my time in App Academy.
                <br />
                <br />
                Animezon is developed with a postgreSQL data base, through the use
                of Ruby to create the necesarry API routes with Ruby on Rails. For the frontend aspect of the project, the data from the backend is
                passed forward with the use of Redux states and then given to the React library to be presented with detail oriented CSS and HTML. 
            </div>

            <div id="animezon-tech-logos">
                <img src="https://cdn.iconscout.com/icon/free/png-256/ruby-47-1175102.png" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

                <img src="https://raw.githubusercontent.com/jangcla/github-profile/3b4d2cde84319e2b6dc1b0a042ba2fb9199a6a35/profile-photos/redux-icon.svg" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" />

                <img src="https://github.com/jangcla/github-profile/blob/main/profile-photos/ruby-on-rails-icon.png?raw=true" />

                <img src="https://github.com/jangcla/github-profile/blob/main/profile-photos/aws.png?raw=true" />

                <img src="https://github.com/jangcla/github-profile/blob/main/profile-photos/heroku-icon.png?raw=true" />
            </div>
        </div>
    )

    const termsInfo =  (
        <div id="info-about-terms">
            <div id="about-use-of-animezon">
                Welcome to Animezon's terms of use information page. To clarify and remind those on the website, Animezon is not a real 
                e-commerce website and no actual purchasing and handling of products are available on the website. This website is simply a 
                fullstack clone of Amazon for learning technologies such as react, javascript, api's, styling, and backend databases.
            </div>

            <div id="about-use-of-animezon">
                When interacting with the website, please remember that other people have access to this website and I ask you not to
                input information you don't want on the internet to see. So please refrain from saving, inputing, and adding
                sensitive information on the website.
            </div>
        </div>
    )

    const featuresInfo = (
        <div id="info-about-features">
            <div id="select-a-feature">
                <button id="feature-select" onClick={updateFeature} value="splash">
                    Animezon
                </button>
                <button id="feature-select" onClick={updateFeature} value="account">
                    account
                </button>
                <button id="feature-select" onClick={updateFeature} value="profile">
                    profile
                </button>
                <button id="feature-select" onClick={updateFeature} value="slider">
                    slider
                </button>
                <button id="feature-select" onClick={updateFeature} value="cart">
                    cart
                </button>
                <button id="feature-select" onClick={updateFeature} value="checkout">
                    checkout
                </button>
                <button id="feature-select" onClick={updateFeature} value="search">
                    search
                </button>
                <button id="feature-select" onClick={updateFeature} value="review">
                    review
                </button>
            </div>

            <div id="feature-selected-inform">
                {infoFeatures[feature][1]}
            </div>
        </div>
    )


    return (
        <div>
            <Navbar/>
            <div id="info-page">
                <div id="info-main-container">
                    <div id="info-photo-container">
                        <img src={infoFeatures[feature][0]} id="info-photo"/>
                    </div>

                    <div id="info-text">
                        <h1 id="info-text-header">
                            Learn about {infoWord}
                        </h1>

                        {
                            infoWord === "Animezon" ? 
                                animezonInfo
                                :
                                null
                        }

                        {
                            infoWord === "Terms of Use" ? 
                                termsInfo
                                :
                                null
                        }

                        {
                            infoWord === "Functions and Features" ?
                                featuresInfo
                                :
                                null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;