import React from "react";
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchedItem extends React.Component {
    render() {
        const money = this.props.item.price.toString().split(".");
        const dollar = money[0];
        const cents = money[1];
        const itemReviews = this.props.reviews.filter(review => review.item_id === this.props.item.id);
        
        let totalScore = 0;

        for (let i = 0; i<itemReviews.length; i++) {
            let score = itemReviews[i].rating;
            totalScore += score;
        }

        if (totalScore > 0) {
            totalScore = totalScore/itemReviews.length
        }
        let starCount = Math.round(totalScore);

        
        // console.log(itemReviews);
        return (
            <div id="search-item">
                <div id="search-photo-div">
                    <Link to={`/items/${this.props.item.id}`}><img src={this.props.item.photoUrl} id="search-item-photo" /></Link>
                </div>
                
                <div id="search-item-description">
                    <Link to={`/items/${this.props.item.id}`} id='search-item-name'>
                        {this.props.item.name}
                    </Link>

                    <small id='search-item-type'>
                        Item Type: <Link to={'/search/ '} id='search-type'>
                            {this.props.item.type_tag}
                        </Link>
                    </small>

                    
                    <div id="two-stars">
                        <div id="stars">
                            {
                                [...Array(starCount)].map((star, i) => {
                                    return (
                                        <label key={i}>
                                            <FontAwesomeIcon icon={faStar} id='faStar-icon-review' />
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <div id="stars-hollow">
                            {
                                [...Array(5 - starCount)].map((star, i) => {
                                    return (
                                        <label key={i}>
                                            <FontAwesomeIcon icon={this.props.hollowStar} id='faStar-icon-review' />
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <div id="reviews-total">
                            <Link to={`/items/${this.props.item.id}`} id="reviews-count-total">
                                {itemReviews.length} Review(s)
                            </Link>
                        </div>
                    </div>
                    
                    <br />
                    <small id='search-item-price'>
                        <small>
                            $
                        </small>
                        <big>
                            {dollar}
                        </big>
                        <small>
                            {cents}
                        </small>
                    </small>

                    

                </div>
            </div>
        )
    }
}

export default SearchedItem;