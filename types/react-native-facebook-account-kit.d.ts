declare module "react-native-facebook-account-kit" {
  interface ColorType {
    rgba(r: number, b: number, g: number, a: number): any
    hex(hexString: string): any
  }

  export var Color: ColorType

  export function configure(options: any): void
  export function loginWithPhone(): Promise<any>
  export function logout(): Promise<void>
  export function getCurrentAccessToken(): Promise<any>
}