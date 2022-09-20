const ACTION_TYPES = new Map<string, string>();

ACTION_TYPES.set("SET_LOADING", "SET_LOADING");
ACTION_TYPES.set("SET_ERROR", "SET_ERROR");

export default ACTION_TYPES;

export const setLoading = (loading: boolean) => ({
    type: ACTION_TYPES.get("SET_LOADING") ?? "DEFAULT",
    payload: loading,
});

export const setError = (error: boolean) => ({
    type: ACTION_TYPES.get("SET_ERROR") ?? "DEFAULT",
    payload: error,
});
