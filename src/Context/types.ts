import type { Dispatch, Reducer } from "react";

import type { UserStateShape } from "./UserState/types";
import type { SiteStateShape } from "./SiteState/types";

type FullStoreShape = {
    users: UserStateShape;
    site: SiteStateShape;
};

export type StoreShape = Partial<FullStoreShape>;

export type Action = {
    type: string;
    payload?: any;
};

type FullContextState = {
    state: StoreShape;
    dispatch: Dispatch<Action>;
};

export type ContextState = Partial<FullContextState>;

export type ReducerShape = Reducer<StoreShape, Action>;
