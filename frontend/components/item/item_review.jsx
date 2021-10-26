import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ItemReview extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div id="item-review-show">
                <div id="reviewer-name-photo">
                    <img src={this.props.itemReview.photo_Url} id='item-review-avatar' />
                    <div id="holds-two">
                        <big id='item-review-name'>{this.props.itemReview.name}</big>

                        <div id="two-stars">
                            <div id="stars">
                                {
                                    [...Array(this.props.itemReview.rating)].map((star) => {
                                        return (
                                            <label>
                                                <FontAwesomeIcon icon={faStar} id='faStar-icon-review' />
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <div id="stars-hollow">
                                {
                                    [...Array(5 - this.props.itemReview.rating)].map((star) => {
                                        return (
                                            <label>
                                                <FontAwesomeIcon icon={this.props.hollowStar} id='faStar-icon-review' />
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <big>{this.props.itemReview.title}</big>
                        </div>
                    </div>
                </div>


                <div id="item-review-body">
                    <big>
                        {this.props.itemReview.body}
                    </big>
                </div>
            </div>
        )
    }
}

export default ItemReview;