import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            rating: null,
            body: '',
        };
        this.noProfileSubmit = this.noProfileSubmit.bind(this);
        this.withProfileSubmit = this.withProfileSubmit.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProfiles()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    noProfileSubmit(e) {
        e.preventDefault();
        let noProfile = {
            title: `${this.state.title}`,
            rating: `${this.state.rating}`,
            body: `${this.state.body}`,
            user_id: `${this.props.userId}`,
            item_id: `${this.props.item.id}`,
            name: `${this.props.currentUser.email}`,
            photo_Url: "https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true"
        }
        // this.props.createReview(noProfile);
        console.log(noProfile);
    }

    withProfileSubmit(e) {
        e.preventDefault();
        let withProfile = {
            title: `${this.state.title}`,
            rating: `${this.state.rating}`,
            body: `${this.state.body}`,
            user_id: `${this.props.userId}`,
            item_id: `${this.props.item.id}`,
            name: `${this.props.personal.name}`,
            photo_Url: `${this.props.personal.avatar_photo}`
        }
        // this.props.createReview(withProfile);
        console.log(withProfile);
    }

    render() {
        if (this.props.myProfile.length !== 0 && this.props.item.id !== undefined) {
           return ( 
               <div id="review-with-profile-comp">
                   <Navbar />
                    <div id="user-show-blue-tab">
                        <div id="inner-blue-info">
                            <img src={this.props.personal.avatar_photo}/>
                            <big>{this.props.personal.name}</big>
                        </div>
                    </div>

                    <div id="main-review-form-div">
                        <div id="main-review-inner">
                            <div id="make-a-review-header">
                                <big id='review-subheader-title'>
                                    Create Review
                                </big>

                                <div id="item-preview-left-right">
                                    <div id="item-info-preview">
                                        <img src={this.props.item.photoUrl}/>
                                        <big>
                                            {this.props.item.name}
                                        </big>
                                    </div>
                                </div>
                            </div>

                            <div id="divider" />

                            <div id="overall-rating-header">
                                <big id='review-mini-subheader-title'>
                                    Overall rating
                                </big>

                                <div id="review-stars-inputs">

                                        <input type="radio" name="star" id="star-radio1" value={1}/>
                                    <label id="star-labels" htmlFor='star-radio1'><FontAwesomeIcon icon={faStar} id='faStar-icon'/></label>                                         
                                    

                                       <input type="radio" name="star" id="star-radio2" value={2} />
                                    <label id="star-labels" htmlFor='star-radio2'><FontAwesomeIcon icon={faStar} id='faStar-icon'/></label>
                                         
                                    
                                       <input type="radio" name="star" id="star-radio3" value={3} />
                                    <label id="star-labels" htmlFor='star-radio3'><FontAwesomeIcon icon={faStar} id='faStar-icon'/></label>                                         
                                    

                                        <input type="radio" name="star" id="star-radio4" value={4}/>
                                    <label id="star-labels" htmlFor='star-radio4'><FontAwesomeIcon icon={faStar} id='faStar-icon'/></label>
                                        
                                  
                                        <input type="radio" name="star" id="star-radio" value={5}/>
                                    <label id="star-labels" htmlFor='star-radio5'><FontAwesomeIcon icon={faStar} id='faStar-icon'/></label>
                                    
                                    
                                    {/* <button id="star-test"></button>
                                    <button id="star-test"></button>
                                    <button id="star-test"></button>
                                    <button id="star-test"></button>
                                    <button id="star-test"></button> */}
                                </div>
                            </div>

                            <div id="divider"/>

                            <div id="review-add-headline">
                                <big id='review-mini-subheader-title'>
                                    Add a headline
                                </big>
                                
                                <input type="text" id="title-maker-input" placeholder='Title your review on the most important to know.'/>
                            </div>

                            <div id="divider"/>

                            <div id="review-write-review">
                                <big id='review-mini-subheader-title'>
                                    Add a written review
                                </big>

                                <textarea name="" id="" cols="30" rows="10" placeholder='What did you like or dislike? What did you use this product for?'></textarea>
                            </div>

                            <div id="submit-review-button-div">
                                <button id="submit-review-button">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>


               </div>
            )

        } else if (this.props.myProfile.length === 0 && this.props.item.id !== undefined) {
           return (
               <div id="review-without-profile-comp">
                   <Navbar/>
                    <div id="user-show-blue-tab">
                        <div id="inner-blue-info">
                            <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true"/>
                            <big>{this.props.currentUser.email}</big>
                        </div>
                    </div>
                   this div has no access to the profile photo
               </div>
           )

        } else if (this.props.item.id === undefined) {
            return ( 
                <div>
                    <Navbar/>
                    error the time session has expired
                    <FontAwesomeIcon icon={faStar}/>
                    
                </div>
            )

        }
    }
}

export default ReviewForm;








// return this.props.myProfile.length !== 0 ? 
// (
    // <div id="review-with-profile">
    //     this div has access to the profile photo

    //     <br />
    //     {this.props.currentUser.email}
    //     <button onClick={this.noProfileSubmit}>no Profile</button>

    //     <button onClick={this.withProfileSubmit}>with Profile</button>
    // </div>
// )
// :
// (
    // <div id="review-without-profile">
    //     this div has no access to the profile photo
    // </div>
// )