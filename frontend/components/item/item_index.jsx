import React from 'react'
import ItemIndexItem from './item_index_item'
import { Link } from 'react-router-dom'

class ItemIndex extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
    }


    render() {
        return this.props.items ?
        (
            <div id="main-index">
                <h2 id="main-index-title">Choose From All</h2>
                <div id="index-categorry">
                        {
                            this.props.items.map(item => <ItemIndexItem item={item} key={item.id}/>)
                        }
                </div>

            </div>
        )
        :
        null;
    }
}

export default ItemIndex;