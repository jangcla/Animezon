import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexContainer from '../item/item_index_container';
import Navbar from '../nav/navbar';
import PhotoSlider from '../slider/photo_slider'
import ItemCompartmentContainer from '../item/item_compartment_container';

class HomePage extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.fetchCarts();
    }

    render() {
        return (
            <div id='home-div'>
                    <Navbar/>
                <div id="home-inner">
                    <PhotoSlider/>
                    
                    <div id="home-within">
                        <ItemCompartmentContainer/>
                        <ItemIndexContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;