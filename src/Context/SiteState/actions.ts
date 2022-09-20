import { NotificationType } from "./types";

const ACTION_TYPES = new Map<string, string>();

ACTION_TYPES.set("SET_LOADING", "SET_LOADING");
ACTION_TYPES.set("SET_ERROR", "SET_ERROR");
ACTION_TYPES.set("SHOW_NOTIFICATION", "SHOW_NOTIFICATION");
ACTION_TYPES.set("HIDE_NOTIFICATION", "HIDE_NOTIFICATION");

export default ACTION_TYPES;

export const setLoading = (loading: boolean) => ({
    type: ACTION_TYPES.get("SET_LOADING") ?? "DEFAULT",
    payload: loading,
});

export const setError = (error: boolean) => ({
    type: ACTION_TYPES.get("SET_ERROR") ?? "DEFAULT",
    payload: error,
});

export const showNotification: (
    title: string,
    description?: string,
    type?: NotificationType,
) => any = (title, description = "", type = "info") => ({
    type: ACTION_TYPES.get("SHOW_NOTIFICATION") ?? "DEFAULT",
    payload: { title, description, type },
});

export const hideNotification = () => ({
    type: ACTION_TYPES.get("HIDE_NOTIFICATION") ?? "DEFAULT",
});
