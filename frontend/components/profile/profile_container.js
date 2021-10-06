import { connect } from "react-redux";
import { createProfile, editProfile } from "../../actions/profile_actions";

import Profile from "./profile";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Profile);
