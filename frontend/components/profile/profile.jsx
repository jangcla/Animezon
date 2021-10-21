import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'

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
        this.props.fetchProfiles()
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
                        </div>
                    </div>

                    <div id="profile-body-split">

                        <div id="profile-body-left">

                            <div id="about-me-bio">

                            </div>

                            <div id="left-side-different-products">

                            </div>

                        </div>

                        <div id="profile-body-right">

                            <div id="community-review-activity">

                            </div>

                        </div>

                    </div>

               </div>

            </div>
        )
        :
        (
            <div>
                This page should show if i have no profile made
            </div>
        )
        ;
    }
}

export default Profile;