import { css } from 'styled-components'

export const panel = css`
    ${({ theme }) => css`
        border-radius: 1em;
        padding: 2em;
        background-color: ${theme.colors.foreground};
    `}
`
