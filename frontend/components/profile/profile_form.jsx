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
            user_id: ``,
        };
    }

    render() {
        return (
            <div id='profile-form-container'>
                <Navbar/>
                This shoule be the profile create page if it words :D
            </div>
        );
    }
}

export default ProfileForm;