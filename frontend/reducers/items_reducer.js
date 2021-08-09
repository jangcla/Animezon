import { RECEIVE_ITEM, RECEIVE_ITEMS } from "../actions/item_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ITEM:
            console.log(action.item)
            nextState[action.item.id] = action.item
            console.log(nextState)
            return nextState;
        case RECEIVE_ITEMS: 
            return action.items
        default:
            return state;
    }
}

export default itemsReducer;