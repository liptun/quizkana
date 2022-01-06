import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            background: string
            foreground: string
        }
        fonts: {
            primary: string
            secondary: string
        }
        breakpoints: {
            tablet: number
            desktop: number
        }
    }
}
