import { combineReducers  } from "redux";

import users from './entities_reducer'
import session from './session_reducer'
import errors from './errors_reducer'


const rootReducer = combineReducers({
    users,
    session,
    errors
})

export default rootReducer;