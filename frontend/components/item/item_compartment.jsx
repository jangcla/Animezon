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
                        <img src="" alt="" />
                    </div>
                </div>
            )
            :
            null;
    }
}

export default ItemCompartment;