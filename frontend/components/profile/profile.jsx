import React from 'react'
import { Link } from 'react-router-dom'
import ItemReview from '../item/item_review';
import Navbar from '../nav/navbar'
import ProfileReview from './profile_review';

class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            avatar_photo: '',
            banner_photo: '',
            bio: '',
            user_id: `${this.props.userId}`,
        };
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProfiles();
        this.props.fetchReviews();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render() {
        return this.props.myProfile.length !== 0 ?
        (
            <div id='personal-profile-comp'>
               <Navbar />

               <div id="personal-profile-div">
            
                    <div id="profile-header">
                        <div id="banner-slot">
                            <img src={this.props.personal.banner_photo} id="banner-slot-photo" />
                        </div>

                        <div id="header-avatar-name">
                            <div id="avatar-with-name">
                                <img src={this.props.personal.avatar_photo} id='avatar-slot-photo' />

                                <big>{this.props.personal.name}</big>
                            </div>

                            <div id="header-button-edit">
                                <button id="editing-profile-button">
                                    Edit your public profile
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="profile-body-split">

                        <div id="profile-body-left">

                            <div id="about-me-bio">
                                <big>About</big>

                                <small>{this.props.personal.bio}</small>
                            </div>

                            <div id="left-side-different-products">

                            </div>

                        </div>

                        <div id="profile-body-right">

                            <div id="community-review-activity">
                                <big>
                                    Community activity
                                </big>
                            </div>

                            {
                                this.props.myReviews.map(myReview => <ProfileReview myReview={myReview} hollowStar={this.props.hollowStar} key={myReview.id} allItems={this.props.allItems}/> )
                            }

                        </div>

                    </div>

               </div>

            </div>
        )
        :
        (
                <div id='personal-profile-comp'>
                    <Navbar />

                    <div id="personal-profile-div">

                        <div id="profile-header">
                            <div id="banner-slot">
                                <img src="https://github.com/jangcla/Animezon/blob/reviews/photos/Screen%20Shot%202021-09-08%20at%201.48.27%20AM.png?raw=true" id="banner-slot-photo" />
                            </div>

                            <div id="header-avatar-name">
                                <div id="avatar-with-name">
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true" id='avatar-slot-photo' />

                                    <big>{this.props.currentUser.email}</big>
                                </div>

                                <div id="header-button-edit">
                                    <Link to='/profile/create' id="editing-profile-link-button">
                                        Make your public profile
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div id="profile-body-split">

                            <div id="profile-body-left">

                                <div id="about-me-bio">
                                    <big>About</big>

                                    <small>No personal profile found</small>
                                </div>

                                <div id="left-side-different-products">

                                </div>

                            </div>

                            <div id="profile-body-right">

                                <div id="community-review-activity">
                                    <big>
                                        Community activity
                                    </big>
                                </div>

                                {
                                    this.props.myReviews.map(myReview => <ProfileReview myReview={myReview} hollowStar={this.props.hollowStar} key={myReview.id} allItems={this.props.allItems}/>)
                                }

                            </div>

                        </div>

                    </div>

                </div>
        )
        ;
    }
}

export default Profile;