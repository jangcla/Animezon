import { connect } from "react-redux";
import { fetchProfiles, updateProfile } from "../../actions/profile_actions";
import { fetchReviews} from "../../actions/review_actions";

import Profile from "./profile";

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id)

    let personal = myProfile[0]
    console.log(personal)
    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id,
        personal: personal,
        myProfile: myProfile,
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
