export type NotificationType = "success" | "warning" | "error" | "info";
export interface SiteNotification {
    visible: boolean;
    title: string;
    description?: string;
    type?: NotificationType;
}

export type SiteStateShape = {
    loading: boolean;
    error: boolean;
    notification: SiteNotification;
};
