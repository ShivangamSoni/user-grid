const ACTION_TYPES = new Map<string, string>();

ACTION_TYPES.set("STORE_USERS", "STORE_USERS");

export default ACTION_TYPES;

export const storeUsers = (users: User[]) => ({
    type: ACTION_TYPES.get("STORE_USERS") ?? "DEFAULT",
    payload: users,
});
