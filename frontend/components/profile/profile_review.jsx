import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ProfileReview extends React.Component {
    render() {
        return(
            <div id="profile-review-show">
                <div id="profile-review-n-a">
                    <img src={this.props.myReview.photo_Url} id="profile-review-avatar" />

                    <big id='profile-review-name-show'>
                        {this.props.myReview.name}
                    </big>
                </div>

                <div id="profile-review-main">
                    <div id="two-stars">
                        <div id="stars">
                            {
                                [...Array(this.props.myReview.rating)].map((star) => {
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
                                [...Array(5 - this.props.myReview.rating)].map((star) => {
                                    return (
                                        <label>
                                            <FontAwesomeIcon icon={this.props.hollowStar} id='faStar-icon-review' />
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <small id='verified-purch'> Verified Purchase</small>
                    </div>

                    <big id='profile-review-title'>
                        {this.props.myReview.title}
                    </big>

                    <big id='profile-review-show-big'>
                        {this.props.myReview.body}
                    </big>

                    <Link to={`/items/${this.props.myReview.item_id}`} id='link-to-review-item'>
                        <img src={this.props.allItems[this.props.myReview.item_id - 1].photoUrl} />

                        {this.props.allItems[this.props.myReview.item_id - 1].name}
                    </Link>

                </div>
            </div>
        )
    }
}

export default ProfileReview;