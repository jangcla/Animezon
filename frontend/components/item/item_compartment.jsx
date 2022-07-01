import React from 'react'
import ItemIndexItem from './item_index_item'
import { Link } from 'react-router-dom'

class ItemCompartment extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
    }


    render() {
        return this.props.animes ?
            (
                <div id="main-index-comp">
                    <div id="main-compartment">
                        <h4 id="comp-index-title">Choose From Animes</h4>
                        <div id="comp-categorry">
                            {
                                this.props.animes.map(item => <ItemIndexItem item={item} key={item.id} />)
                            }
                        </div>
                    </div>
                    <div id="main-compartment">
                        <h4 id="comp-index-title">Choose From Mangas</h4>
                        <div id="comp-categorry">
                            {
                                this.props.mangas.map(item => <ItemIndexItem item={item} key={item.id} />)
                            }
                        </div>
                    </div>
                    <div id="main-compartment">
                        <h4 id="comp-index-title">Choose From Merch</h4>
                        <div id="comp-categorry">
                            {
                                this.props.merch.map(item => <ItemIndexItem item={item} key={item.id} />)
                            }
                        </div>
                    </div>
                    <div id="ad-compartment-section">
                        <div id='welcome-we-waited'>
                            <big>
                                Welcome to Animezon
                            </big>
                            <small>
                                We've been waiting
                            </small>
                        </div>
                        <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/animezon-ad.png?raw=true" id='splash-page-ad'/>
                    </div>
                </div>
            )
            :
            null;
    }
}

export default ItemCompartment;