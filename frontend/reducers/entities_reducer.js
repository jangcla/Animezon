import { combineReducers } from "redux";
import itemsReducer from "./items_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    items: itemsReducer
})

export default entitiesReducer;