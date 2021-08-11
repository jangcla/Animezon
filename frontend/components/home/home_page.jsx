import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexContainer from '../item/item_index_container';
import Navbar from '../nav/navbar';
import PhotoSlider from '../slider/photo_slider'

class HomePage extends React.Component {
    render() {
        return (
            <div id='home-div'>
                    <Navbar/>
                <div id="home-inner">
                    <PhotoSlider/>
                    <ItemIndexContainer/>
                </div>
            </div>
        )
    }
}

export default HomePage;