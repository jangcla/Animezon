import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile_actions";
import { createPurchase } from "../../actions/purchase_actions";

import PurchasePage from "./purchase_page";

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id);

    let personal = myProfile[0];

    return {
        currentUser: state.entities.users[state.session.id],
        userId: state.session.id,
        personal: personal,
    }
}

const mDTP = dispatch => {

    return {
        createPurchase: (purchase) => dispatch(createPurchase(purchase)),
        fetchProfiles: () => dispatch(fetchProfiles()),
    }
}