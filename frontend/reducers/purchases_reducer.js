import {
    RECEIVE_PURCHASE,
    RECEIVE_PURCHASES,
    REMOVE_PURCHASE
} from '../actions/purchase_actions';

const purchasesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_PURCHASE:
            nextState[action.purchase.id] = action.purchase
            return nextState;
        case RECEIVE_PURCHASES:
            return action.purchases;
        case REMOVE_PURCHASE:
            delete nextState[action.purchaseId]
            return nextState;
        default:
            return state;
    }
}

export default purchasesReducer;