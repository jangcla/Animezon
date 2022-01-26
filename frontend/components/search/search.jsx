import React from "react";
import Navbar from "../nav/navbar";
import SearchedItem from "./search_item";

class Search extends React.Component {
    constructor(props){
        super(props)


    }

    UNSAFE_componentWillMount() {
        this.props.fetchItems();
        this.props.fetchReviews();
    }

    render() {
        return this.props.keyword === ' ' ?
            (
                <div id="searched-all">
                    <Navbar />
                    <div id="search-index">
                        {
                            this.props.items.map(item => <SearchedItem item={item} key={item.id} hollowStar={this.props.hollowStar} reviews={this.props.allReviews} />)
                        }
                    </div>
                </div>
            )
            :
            (
                <div id="filtered-search">
                    <Navbar />
                    <div id="search-index">
                        {
                            this.props.searchedItem.map(item => <SearchedItem item={item} key={item.id} hollowStar={this.props.hollowStar} reviews={this.props.allReviews} />)
                        }
                    </div>
                </div>
            )
    }
}

export default Search;