import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile_actions";
import { createPurchase } from "../../actions/purchase_actions";
import { deleteCart } from "../../actions/cart_actions";

import PurchasePage from "./purchase_page";

const mSTP = state => {
    const profilesAll = Object.values(state.entities.profiles);
    let myProfile = profilesAll.filter(profile => profile.user_id === state.session.id);

    const cartItems = Object.values(state.entities.carts);
    let myItems = cartItems.filter(cartItem => cartItem.user_id === state.session.id);

    let totalSum = 0;
    myItems.forEach(item => {
        let sum = item.price * item.quantity

        totalSum += sum;
    })
    totalSum = totalSum.toFixed(2);

    let personal = myProfile[0];

    let currentUser = state.entities.users[state.session.id];
    
    let userName = currentUser.email.split('@')[0];
    console.log(totalSum)

    return {
        currentUser: currentUser,
        userId: state.session.id,
        personal: personal,
        myItems: myItems,
        userName: userName,
        totalSum: totalSum
    }
}

const mDTP = dispatch => {

    return {
        createPurchase: (purchase) => dispatch(createPurchase(purchase)),
        fetchProfiles: () => dispatch(fetchProfiles()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
    }
}

export default connect(mSTP, mDTP)(PurchasePage);