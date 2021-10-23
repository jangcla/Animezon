import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            rating: null,
            body: '',
        };
        this.noProfileSubmit = this.noProfileSubmit.bind(this);
        this.withProfileSubmit = this.withProfileSubmit.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProfiles()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    noProfileSubmit(e) {
        e.preventDefault();
        let noProfile = {
            title: `${this.state.title}`,
            rating: `${this.state.rating}`,
            body: `${this.state.body}`,
            user_id: `${this.props.userId}`,
            item_id: `${this.props.item.id}`,
            name: `${this.props.currentUser.email}`,
            photo_Url: "https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true"
        }
        // this.props.createReview(noProfile);
        console.log(noProfile);
    }

    withProfileSubmit(e) {
        e.preventDefault();
        let withProfile = {
            title: `${this.state.title}`,
            rating: `${this.state.rating}`,
            body: `${this.state.body}`,
            user_id: `${this.props.userId}`,
            item_id: `${this.props.item.id}`,
            name: `${this.props.personal.name}`,
            photo_Url: `${this.props.personal.avatar_photo}`
        }
        // this.props.createReview(withProfile);
        console.log(withProfile);
    }

    render() {
        if (this.props.myProfile.length !== 0 && this.props.item.id !== undefined) {
           return ( 
               <div id="review-with-profile-comp">
                   <Navbar />
                    <div id="user-show-blue-tab">
                        <div id="inner-blue-info">
                            <img src={this.props.personal.avatar_photo}/>
                            <big>{this.props.personal.name}</big>
                        </div>
                    </div>


               </div>
            )

        } else if (this.props.myProfile.length === 0 && this.props.item.id !== undefined) {
           return (
               <div id="review-without-profile-comp">
                   <Navbar/>
                    <div id="user-show-blue-tab">
                        <div id="inner-blue-info">
                            <img src="https://github.com/jangcla/Animezon/blob/reviews/profile_photos/default-avatar.png?raw=true"/>
                            <big>{this.props.currentUser.email}</big>
                        </div>
                    </div>
                   this div has no access to the profile photo
               </div>
           )

        } else if (this.props.item.id === undefined) {
            return ( 
                <div>
                    <Navbar/>
                    error the time session has expired
                </div>
            )

        }
    }
}

export default ReviewForm;








// return this.props.myProfile.length !== 0 ? 
// (
    // <div id="review-with-profile">
    //     this div has access to the profile photo

    //     <br />
    //     {this.props.currentUser.email}
    //     <button onClick={this.noProfileSubmit}>no Profile</button>

    //     <button onClick={this.withProfileSubmit}>with Profile</button>
    // </div>
// )
// :
// (
    // <div id="review-without-profile">
    //     this div has no access to the profile photo
    // </div>
// )