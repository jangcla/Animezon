import React from 'react'
import { Link } from 'react-router-dom'


class ItemIndexItem extends React.Component {
    render() {
        return(
            <div id='indext-item'>
                <Link to={`/items/${this.props.item.id}`}><img src={this.props.item.photoUrl} id="index-small-img"/></Link>
            </div>
        )
    }
}

export default ItemIndexItem;
