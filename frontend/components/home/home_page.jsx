import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexContainer from '../item/item_index_container';
import Navbar from '../nav/navbar';
import PhotoSlider from '../slider/photo_slider'
import ItemCompartmentContainer from '../item/item_compartment_container';

class HomePage extends React.Component {
    render() {
        return (
            <div id='home-div'>
                    <Navbar/>
                <div id="home-inner">
                    <PhotoSlider/>
                    <ItemCompartmentContainer/>
                    <ItemIndexContainer/>
                </div>
            </div>
        )
    }
}

export default HomePage;