import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class HomePage extends React.Component {
    render() {
        return (
            <header id='nav-bar'>
                <div>
                    <h2>Animezon</h2>
                </div>

                <GreetingContainer />

            </header>
        )
    }
}

export default HomePage;