import { FC, ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Misc from './Misc'
import ResetCss from './ResetCss'
import Typography from './Typography'

const theme: DefaultTheme = {
    colors: {
        primary: '#FF3366',
        secondary: '#20A4F3',
        background: '#011627',
        foreground: '#F6F7F8',
    },
    fonts: {
        primary: '"Noto Sans JP", sans-serif',
        secondary: '',
    },
    breakpoints: {
        tablet: 768,
        desktop: 1024,
    },
}

interface Props {
    children?: ReactNode
}

const Theme: FC<Props> = ({ children }) => (
    <>
        <ThemeProvider theme={theme}>
            <ResetCss />
            <Typography />
            <Misc />
            {children}
        </ThemeProvider>
    </>
)
export default Theme
