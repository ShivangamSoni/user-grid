import { Action } from "../types";
import ACTION_TYPES from "./actions";
import type { SiteStateShape } from "./types";

const initialState: SiteStateShape = {
    loading: false,
    error: false,
    notification: {
        visible: false,
        title: "",
    },
};

const siteReducer = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case ACTION_TYPES.get("SET_LOADING"):
            return { ...state, loading: payload };
        case ACTION_TYPES.get("SET_ERROR"):
            return { ...state, error: payload };
        case ACTION_TYPES.get("SHOW_NOTIFICATION"):
            return { ...state, notification: { ...payload, visible: true } };
        case ACTION_TYPES.get("HIDE_NOTIFICATION"):
            return { ...state, notification: { visible: false, title: "" } };
        default:
            return state;
    }
};

export default siteReducer;
