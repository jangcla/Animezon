import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile_actions";
import { createReview } from "../../actions/review_actions";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import ReviewForm from './review_form';

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id)

    let personal = myProfile[0]
    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id,
        personal: personal,
        myProfile: myProfile,
        item: state.entities.item,
        hollowStar: faStar
    }
}

const mDTP = dispatch => {

    return {
        createReview: (review) => dispatch(createReview(review)),
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default connect(mSTP, mDTP)(ReviewForm);