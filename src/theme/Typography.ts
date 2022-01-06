import { createGlobalStyle, css } from 'styled-components'
import { desktopStyle } from './helpers'

const Typography = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');
html {
    font-size: 16px;
    ${({ theme }) => css`
        font-family: ${theme.fonts.primary};
    `}
    ${desktopStyle(css`
        font-size: 1vw;
    `)}
}
`
export default Typography
