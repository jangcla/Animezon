import { connect } from "react-redux";
import { fetchProfiles, updateProfile } from "../../actions/profile_actions";
import { fetchReviews } from "../../actions/review_actions";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import Profile from "./profile";

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id)

    let personal = myProfile[0]
    // console.log(personal)
    const allReviews = Object.values(state.entities.reviews);
    let myReviews = allReviews.filter(allReview => allReview.user_id === state.session.id).reverse();

    const allItems = Object.values(state.entities.items);

    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id,
        personal: personal,
        myProfile: myProfile,
        myReviews: myReviews,
        hollowStar: faStar,
        allItems: allItems
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles()),
        updateProfile: (profile) => dispatch(updateProfile(profile)),
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mSTP, mDTP)(Profile);
