import { connect } from "react-redux";
import { createProfile } from "../../actions/profile_actions";
import ProfileForm from "./profile_form";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createProfile: profile => dispatch(createProfile(profile))
    }
}

export default connect(mSTP, mDTP)(ProfileForm);
