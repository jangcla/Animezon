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
                    <div id="prfilename-div">
                    <big>Profile Name:</big>
                    <input type="text" id='profile-name-input' onChange={this.update('name')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileForm;