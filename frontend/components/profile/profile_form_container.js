import { connect } from "react-redux";
import { createProfile, fetchProfiles } from "../../actions/profile_actions";

import ProfileForm from "./profile_form";

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id)

    let personal = []
        if(myProfile !== 0) {
            while(personal.length < 1) {
                personal.push(myProfile[0])
            }
        }

    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id,
        personal: personal,
        myProfile: myProfile
    }
}

const mDTP = dispatch => {
    return {
        createProfile: profile => dispatch(createProfile(profile)),
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default connect(mSTP, mDTP)(ProfileForm);
