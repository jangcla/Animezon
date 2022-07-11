import React, { useEffect } from "react";
import Navbar from "../nav/navbar";
import { Link } from "react-router-dom";

const InfoPage = ({infoWord}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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

            <div id="about-sensitive-info-use">
                When interacting with the website, please remember that other people have access to this website and I ask you not to
                input information you don't want on the internet to see. So please refrain from saving, inputing, and adding
                sensitive information on the website.
            </div>
        </div>
    )




    return (
        <div>
            <Navbar/>
            <div id="info-page">
                <div id="info-main-container">
                    <div id="info-photo-container">
                        <img src="https://github.com/jangcla/Animezon/blob/info/photos/info-photos/info-logo.png?raw=true" id="info-photo"/>
                    </div>

                    <div id="info-text">
                        <h1 id="info-text-header">
                            Learn more about {infoWord}
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;