import React from 'react'
import ItemIndexItem from './item_index_item'
import { Link } from 'react-router-dom'

class ItemIndex extends React.Component {
    componentDidMount() {
        this.props.fetchItems()
        console.log(this.props)
    }


    render() {
        return this.props.items ?
        (
            <div id="main-index">

                <div id="index-categorry">
                    <ul>
                        {/* <li>hello</li> */}
                        {
                            this.props.items.map(item => <ItemIndexItem item={item} key={item.id}/>)
                        }
                    </ul>
                </div>

            </div>
        )
        :
        null;
    }
}

export default ItemIndex;