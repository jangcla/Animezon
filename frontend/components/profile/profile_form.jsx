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
                    <div id="left-pform">

                        <div id="profilename-div">
                            <big>Profile Name</big>
                            <input type="text" id='profile-name-input' onChange={this.update('name')}/>
                        </div>

                        <div id="profile-bio-div">
                            <big>Profile Bio</big>
                            <textarea id="bio-text-box" cols="30" rows="10"/>
                        </div>

                    </div>

                    <div id="right-pform">

                        <div id="profile-avatar-div">
                            <big>
                                Choose your own avatar photo
                            </big>

                            <div id="avatar-selection">
                                <div id="avatar-set1">

                                    <div id="default-avatar-select">
                                        <h3>Default Avatar</h3>
                                        <label>
                                            <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                            <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true" id='default-avatar' />
                                        </label>
                                    </div>

                                    <div id="hunter-select">
                                        <h3>Hunter x Hunter</h3>
                                        <div id="hunter-inner">
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
                                    </div>

                                    <div id="naruto-select">
                                        <h3>Naruto</h3>
                                        <div id="naruto-inner">
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
                                    </div>

                                    <div id="mha-select">
                                        <h3>My hero academia</h3>
                                        <div id="mha-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/deku-face.jpeg?raw=true" id="mha-avatar" />
                                            </label>
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/bakugo-face.jpeg?raw=true" id="mha-avatar" />
                                            </label>
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/todoroki-face.png?raw=true" id="mha-avatar" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div id="avatar-set2">

                                    <div id="jkaisen-select">
                                        <h3>Jujutsu Kaisen</h3>

                                        <div id="jkaisen-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gojo-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sukuna-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nobara-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/yuuji-face.png?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/megumi-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>
                                        </div>
                                    </div>
                    
                                    <div id="one-piece-select">
                                        <h3>One Piece</h3>
                                        <div id="one-piece-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/luffy-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zoro-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')}/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/chopper-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div id="demon-slayer-select">
                                        <h3>Demon Slayer</h3>
                                        <div id="demon-slayer-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/tanjiro-face.png?raw=true" id="demon-slayer-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nezuko-face.jpeg?raw=true" id="demon-slayer-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zenitsu-face.jpeg?raw=true" id="demon-slayer-avatar" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
        


                            </div>
                        </div>

                        <div id="profile-banner-div">
                            <big>
                                Choose a banner to customize on your profile
                            </big>

                            <div id="banner-selection">
                                <div id="default-banner-select">
                                    <h3>Default Banner</h3>
                                    <label>
                                        <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                        <img src="https://github.com/jangcla/Animezon/blob/reviews/photos/Screen%20Shot%202021-09-08%20at%201.48.27%20AM.png?raw=true" id="default-banner"/>
                                    </label>                                
                                </div>

                                <div id="banner-anime-select">
                                    <h3>Anime Banner Set</h3>

                                    <div id="split-banner-select">
                                        <div id="first-banner-set">
                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/demon-slayer-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/hunterhunter1.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/jujutsu-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>
                                        </div>

                                        <div id="second-banner-set">
                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/mha-banner.jpg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/naruto-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner-photo')} />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/onepiece-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default ProfileForm;