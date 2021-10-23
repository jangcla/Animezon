import { RECEIVE_ITEM } from "../actions/item_actions";

const itemReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_ITEM:
            let nextState = {}
            nextState = action.item
            return nextState;
        default:
            return state;
    }
}

export default itemReducer;