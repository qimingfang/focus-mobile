declare module "react-native-push-notification" {
  export function configure(options: {}): void
  export function localNotificationSchedule(options: {}): void
  export function cancelAllLocalNotifications(): void
  export function cancelLocalNotifications(options: {}): void
}