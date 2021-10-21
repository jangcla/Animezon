import { connect } from "react-redux";
import { createProfile, fetchProfiles, updateProfile } from "../../actions/profile_actions";

import ProfileForm from "./profile_form";

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
        createProfile: profile => dispatch(createProfile(profile)),
        fetchProfiles: () => dispatch(fetchProfiles()),
        updateProfile: (profile) => dispatch(updateProfile(profile))
    }
}

export default connect(mSTP, mDTP)(ProfileForm);
