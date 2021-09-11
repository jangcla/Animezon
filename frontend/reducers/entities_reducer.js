import { combineReducers } from "redux";
import cartsReducer from "./carts_reducer";
import itemsReducer from "./items_reducer";
import itemReducer from "./item_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    items: itemsReducer,
    item: itemReducer,
    carts: cartsReducer
})

export default entitiesReducer;