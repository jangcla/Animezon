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

                            </div>

                        </div>

                    </div>

               </div>

            </div>
        )
        :
        (
            <div id='need-to-create-profile'>
                <Navbar/>
                <div id="link-to-create-profile">
                    <Link to='profile/create'></Link>
                </div>
            </div>
        )
        ;
    }
}

export default Profile;