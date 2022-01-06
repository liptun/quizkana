import { createGlobalStyle, css } from 'styled-components'

const Misc = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    ${({ theme }) => css`
        body {
            min-height: 100vh;
            background-color: ${theme.colors.background};
        }
    `}
`

export default Misc
