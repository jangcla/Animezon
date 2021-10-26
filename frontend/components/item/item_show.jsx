import React from 'react';
import { Link } from 'react-router-dom';
import CreateCartItem from '../item_add/cart_create';
import Navbar from '../nav/navbar';
import ItemCompartmentContainer from './item_compartment_container';
import ItemReview from './item_review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


class ItemShow extends React.Component {

    UNSAFE_componentWillMount(){
        this.props.fetchReviews();
        this.props.fetchItem(this.props.match.params.itemId);
    }


    componentDidUpdate(prevProps,prevState) {
        if(prevProps.location !== this.props.location){
            this.props.fetchItem(this.props.match.params.itemId);
        }
    }

    render() {
        return (this.props.item && this.props.itemReviews.length !== 0) ? 
        (
            <div id="item-show-component">
                <Navbar/>
                <div id='item-show'>
                    <div id="display">
                        <div id="side-display">
                            <button><img src={this.props.item.photoUrl} id="button-img"/></button>
                        </div>

                        <div id="main-display">
                            <img src={this.props.item.photoUrl} id='main-photo'/>
                        </div>
                    </div>

                    <div id="item-info">
                        <h1>{this.props.item.name}</h1>
                            <h5><big>Type:</big> <Link to='/error/underdevelopment' id='li'><big id='uppercase'>{this.props.item.type_tag}</big></Link></h5>
                        <div id='divider'/>
                        <br />

                        <div id="info-price">
                            <p>Price:</p>
                            <p id='price-num'>${this.props.item.price}</p>  
                        </div>  

                        <div id='divider'/>
                        <br />

                        <div id='item-description'>
                            <h4>About this item</h4>
                            <p>{this.props.item.description}</p>
                        </div>  

                    </div>

                    <CreateCartItem user={this.props.user} item={this.props.item} createCart={this.props.createCart} history={this.props.history}/>
                </div>

                <div id="item-reviews-split">
                    <div id="make-review-link">
                        <big>
                            Review this product
                        </big>

                        <small>
                            Share your thoughts with other customers
                        </small>
                        <Link to='/review/form' id='review-form-link'>Write a customer review</Link>
                    </div>
                    <div id="item-reviews-index">
                        <h2>
                            View recent reviews from other customers
                        </h2>
                        {
                            this.props.itemReviews.map(itemReview => <ItemReview itemReview={itemReview} key={itemReview.id} hollowStar={this.props.hollowStar} reviewsLength ={this.props.itemReviews.length}/>)
                        }
                    </div>
                </div>
            </div>
            )
        :
            (
                    <div id="item-show-component">
                        <Navbar />
                        <div id='item-show'>
                            <div id="display">
                                <div id="side-display">
                                    <button><img src={this.props.item.photoUrl} id="button-img" /></button>
                                </div>

                                <div id="main-display">
                                    <img src={this.props.item.photoUrl} id='main-photo' />
                                </div>
                            </div>

                            <div id="item-info">
                                <h1>{this.props.item.name}</h1>
                                <h5><big>Type:</big> <Link to='/error/underdevelopment' id='li'><big id='uppercase'>{this.props.item.type_tag}</big></Link></h5>
                                <div id='divider' />
                                <br />

                                <div id="info-price">
                                    <p>Price:</p>
                                    <p id='price-num'>${this.props.item.price}</p>
                                </div>

                                <div id='divider' />
                                <br />

                                <div id='item-description'>
                                    <h4>About this item</h4>
                                    <p>{this.props.item.description}</p>
                                </div>

                            </div>

                            <CreateCartItem user={this.props.user} item={this.props.item} createCart={this.props.createCart} history={this.props.history} />
                        </div>

                        <div id="item-reviews-split">
                            <div id="make-review-link">
                                <big>
                                    Review this product
                                </big>

                                <small>
                                    Share your thoughts with other customers
                                </small>
                                <Link to='/review/form' id='review-form-link'>Write a customer review</Link>
                            </div>
                            <div id="item-reviews-index">
                                <h2>
                                    No customer reviews
                                </h2>

                                <big>
                                    There are no reviews for this product yet!
                                </big>
                                
                                <small>
                                    Be one of the first to right a review!
                                </small>
                            </div>
                        </div>
                    </div>
            )
        ;
    }
}

export default ItemShow;