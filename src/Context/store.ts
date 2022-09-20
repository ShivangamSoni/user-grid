import combineReducers from "../helpers/combineReducers";

import userReducer from "./UserState/reducer";

const reducer = combineReducers({ users: userReducer });

export default reducer;
