import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'


class ItemShow extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchItem(this.props.match.params.itemId)
    }

    render() {
        return this.props.item ? 

        (
            <div id="item-show-component">
                        <header id='nav-bar'>
                            <div id='nav-logo'>
                                <Link to='/' id='link'><img src="https://i.pinimg.com/originals/13/69/c2/1369c275968915fa376e534f1d0fe891.jpg" id='anime-home' /></Link>
                            </div>

                            <GreetingContainer />

                        </header>
                <div id='item-show'>
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.price}</p>
                    <p>{this.props.item.availability}</p>
                    <p>{this.props.item.description}</p>
                    <Link to={`/`}>Home Page</Link>
                </div>
            </div>
            )
        :
        null;
    }
}

export default ItemShow;