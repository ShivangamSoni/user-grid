import { Action } from "../types";
import ACTION_TYPES from "./actions";
import type { UserStateShape } from "./types";

const initialState: UserStateShape = {};

const userReducer = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case ACTION_TYPES.get("STORE_USERS"):
            return { ...state, users: [...payload] };
        default:
            return state;
    }
};

export default userReducer;
