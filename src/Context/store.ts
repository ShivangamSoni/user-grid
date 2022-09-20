import combineReducers from "../helpers/combineReducers";

import userReducer from "./UserState/reducer";

import siteReducer from "./SiteState/reducer";

const reducer = combineReducers({ users: userReducer, site: siteReducer });

export default reducer;
