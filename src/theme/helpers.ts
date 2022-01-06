import {
    createGlobalStyle,
    ThemeProvider,
    css,
    FlattenSimpleInterpolation,
} from 'styled-components'

export const tabletStyle = (style: FlattenSimpleInterpolation) => css`
    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.tablet}px) {
            ${style}
        }
    `}
`
export const desktopStyle = (style: FlattenSimpleInterpolation) => css`
    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.desktop}px) {
            ${style}
        }
    `}
`
