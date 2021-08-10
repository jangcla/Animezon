import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexContainer from '../item/item_index_container';
import Navbar from '../nav/navbar';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ItemIndexContainer/>
            </div>
        )
    }
}

export default HomePage;