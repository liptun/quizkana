import { createGlobalStyle, css } from 'styled-components'

const Misc = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    ${({ theme }) => css`
        ::selection {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.foreground};
        }
        body {
            min-height: 100vh;
            background-color: ${theme.colors.background};
        }
    `}
`

export default Misc
