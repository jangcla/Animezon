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
        this.profileSubmit = this.profileSubmit.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProfiles()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    profileSubmit(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        console.log(profile);
        this.props.createProfile(profile);
    }

    render() {
        return this.props.myProfile.length !== 0 ? 
        (
            <div>It seems that you already have a profile made! <br />Click here to view profile <button>CLick me</button>
            {this.props.personal.length}
            </div>
        )
        :
        (
            <div id='profile-form-container'>
                <Navbar/>
                <div id="profile-form">            
                    <div id="right-pform">

                        <div id="profile-avatar-div">
                            <div id="avatar-selection">
                                <div id="avatar-set1">
                                    <div id="set1-left">
                                        <div id="default-avatar-select">
                                            <h3 id='a-select-caption'>Avatar Select</h3>
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true" id='default-avatar' />
                                            </label>
                                        </div>
                                    </div>

                                    <div id="set1-right">
                                        <div id="hunter-select">
                                            <h3>Hunter x Hunter</h3>
                                            <div id="hunter-inner">
                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://i.pinimg.com/originals/bc/e6/f9/bce6f9fb6a35710531b5b85c825ccb66.jpg"/>
                                                    <img src="https://i.pinimg.com/originals/bc/e6/f9/bce6f9fb6a35710531b5b85c825ccb66.jpg" id='hunter-avatar'/>
                                                </label>

                                                <label >
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gon-face.jpeg?raw=true" />
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gon-face.jpeg?raw=true" id='hunter-avatar'/>
                                                </label>

                                                <label >
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/killua-face.png?raw=true"/>
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/killua-face.png?raw=true" id='hunter-avatar'/>
                                                </label>
                                            </div>
                                        </div>

                                        <div id="naruto-select">
                                            <h3>Naruto</h3>
                                            <div id="naruto-inner">
                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/naruto-face.jpeg?raw=true"/>
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/naruto-face.jpeg?raw=true" id="naruto-avatar" />
                                                </label>

                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sasuke-face.png?raw=true" />
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sasuke-face.png?raw=true" id="naruto-avatar" />
                                                </label>

                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/kakashi-face.jpeg?raw=true"/>
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/kakashi-face.jpeg?raw=true" id="naruto-avatar" />
                                                </label>
                                            </div>
                                        </div>

                                        <div id="mha-select">
                                            <h3>My Hero Academia</h3>
                                            <div id="mha-inner">
                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/deku-face.jpeg?raw=true" />
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/deku-face.jpeg?raw=true" id="mha-avatar" />
                                                </label>
                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/bakugo-face.jpeg?raw=true" />
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/bakugo-face.jpeg?raw=true" id="mha-avatar" />
                                                </label>
                                                <label>
                                                    <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/todoroki-face.png?raw=true" />
                                                    <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/todoroki-face.png?raw=true" id="mha-avatar" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="avatar-set2">

                                    <div id="jkaisen-select">
                                        <h3>Jujutsu Kaisen</h3>

                                        <div id="jkaisen-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gojo-face.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/gojo-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sukuna-face.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/sukuna-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nobara-face.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nobara-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/yuuji-face.png?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/yuuji-face.png?raw=true" id='jkaisen-avatar'/>
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/megumi-face.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/megumi-face.jpeg?raw=true" id='jkaisen-avatar'/>
                                            </label>
                                        </div>
                                    </div>
                    
                                    <div id="one-piece-select">
                                        <h3>One Piece</h3>
                                        <div id="one-piece-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/luffy-face.jpeg?raw=true" />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/luffy-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zoro-face.jpeg?raw=true" />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zoro-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/chopper-face.jpeg?raw=true" />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/chopper-face.jpeg?raw=true" id="one-piece-avatar" />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div id="demon-slayer-select">
                                        <h3>Demon Slayer</h3>
                                        <div id="demon-slayer-inner">
                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/tanjiro-face.png?raw=true" />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/tanjiro-face.png?raw=true" id="demon-slayer-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nezuko-face.jpeg?raw=true" />
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/nezuko-face.jpeg?raw=true" id="demon-slayer-avatar" />
                                            </label>

                                            <label>
                                                <input type="radio" name="avatar" onClick={this.update('avatar_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zenitsu-face.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/zenitsu-face.jpeg?raw=true" id="demon-slayer-avatar" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
        


                            </div>
                        </div>

                        <div id="profile-banner-div">

                            <div id="banner-selection">
                                <div id="default-banner-select">
                                    <div id='banner-select-caption'>
                                        <big >
                                            Banner Select
                                        </big>
                                    </div>

                                    <label>
                                        <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/photos/Screen%20Shot%202021-09-08%20at%201.48.27%20AM.png?raw=true" />
                                        <img src="https://github.com/jangcla/Animezon/blob/reviews/photos/Screen%20Shot%202021-09-08%20at%201.48.27%20AM.png?raw=true" id="default-banner"/>
                                    </label> 

                                    <label>
                                        <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/main/photos/Screen%20Shot%202021-09-08%20at%2012.56.53%20AM.png?raw=true" />
                                        <img src="https://github.com/jangcla/Animezon/blob/main/photos/Screen%20Shot%202021-09-08%20at%2012.56.53%20AM.png?raw=true" id="default-banner"/>
                                    </label>                                
                                </div>

                                <div id="banner-anime-select">

                                    <div id="split-banner-select">
                                        <div id="first-banner-set">
                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/demon-slayer-banner.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/demon-slayer-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/hunterhunter1.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/hunterhunter1.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/jujutsu-banner.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/jujutsu-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>
                                        </div>

                                        <div id="second-banner-set">
                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/mha-banner.jpg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/mha-banner.jpg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/naruto-banner.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/naruto-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>

                                            <label>
                                                <input type="radio" name="banner" onClick={this.update('banner_photo')} value="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/onepiece-banner.jpeg?raw=true"/>
                                                <img src="https://github.com/jangcla/Animezon/blob/reviews/profile-banners/onepiece-banner.jpeg?raw=true"id="anime-banner" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="left-pform">

                        <div id="profilename-div">
                            <big>Profile Name</big>
                            <input type="text" id='profile-name-input' onChange={this.update('name')} />
                        </div>

                        <div id="profile-bio-div">
                            <big>Profile Bio</big>
                            <textarea id="bio-text-box" cols="30" rows="10" onChange={this.update('bio')}/>
                        </div>

                        <button id='profile-create-button' onClick={this.profileSubmit}>
                            Create Profile
                        </button>

                    </div>

                </div>
            </div>
        );
    }
}

export default ProfileForm;