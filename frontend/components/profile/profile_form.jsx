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
    }

    render() {
        return (
            <div id='profile-form-container'>
                <Navbar/>
                <div id="profile-form">
                    <input type="text" id='profile-name-input' onChange={this.forceUpdate('name')}/>
                </div>
            </div>
        );
    }
}

export default ProfileForm;