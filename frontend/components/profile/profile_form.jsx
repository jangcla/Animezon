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

                        <div id="avatar-selection">
                            <div id="hunter-select">
                                <h3>Hunter x Hunter</h3>

                                <label>
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                    <img src="https://i.pinimg.com/originals/bc/e6/f9/bce6f9fb6a35710531b5b85c825ccb66.jpg" id='hunter-avatar'/>
                                </label>

                                <label >
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gon-face.jpeg?raw=true" id='hunter-avatar'/>
                                </label>

                                <label >
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/killua-face.png?raw=true" id='hunter-avatar'/>
                                </label>

                            </div>

                            <div id="naruto-select">
                                <h3>Naruto</h3>
                                <label>
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/naruto-face.jpeg?raw=true" id="naruto-avatar" />
                                </label>

                                <label>
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sasuke-face.png?raw=true" id="naruto-avatar" />
                                </label>

                                <label>
                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/kakashi-face.jpeg?raw=true" id="naruto-avatar" />
                                </label>

                            </div>

                            <div id="mha-select">
                                <label>
                                    <input type="radio" name="avatar"/>
                                    <img src="" id="" />
                                </label>
                            </div>
                            
                        </div>
                    </div>

                    <div id="profile-banner-div">
                        <big>
                            Choose a banner to customize on your profile:
                        </big>

                        <div id="banner-selection">
                            <input type="radio" name="banner" />
                            <input type="radio" name="banner" />
                            <input type="radio" name="banner" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileForm;