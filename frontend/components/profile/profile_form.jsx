import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'

class ProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            avatar_photo: '',
            banner_photo: '',
            bio: '',
            user_id: `${this.props.userId}`,
        };
        this.profileSubmit = this.profileSubmit(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    profileSubmit(e) {
        const profile = Object.assign({}, this.state);
        this.props.createProfile(profile);
    }

    render() {
        return (
            <div id='profile-form-container'>
                <Navbar/>
                <div id="profile-form">
                    <div id="profilename-div">
                        <big>Profile Name:</big>
                        <input type="text" id='profile-name-input' onChange={this.update('name')}/>
                    </div>

                    <div id="profile-bio-div">
                        <big>Profile Bio:</big>
                        <textarea id="bio-text-box" cols="30" rows="10"/>
                    </div>

                    <div id="profile-avatar-div">
                        <big>
                            Choose your own avatar photo:
                        </big>
                    </div>

                    <div id="profile-banner-div">
                        <big>
                            Choose a banner to customize on your profile:
                        </big>

                        <div id="banner-selection">
                            <input type="radio" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileForm;