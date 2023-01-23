import 'styled-components';


declare module 'styled-components' {
  export interface CustomTheme {
    backgroundColor: string,
    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    menuColor: string
  }
}