declare module "react-native-navigation" {
  export interface Navigation {
    startSingleScreenApp(options: any): void
    registerComponent(screenId: string, generator?: any, store?: any, provider?: any): void
  }
}