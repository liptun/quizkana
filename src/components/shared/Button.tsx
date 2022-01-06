import { Link as LinkRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { themeSchema } from '../../Theme'

const buttonBaseStyle = css`
    ${({ theme }: {theme: themeSchema}) => css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        padding: 15px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: white;
            color: ${theme.colors.primary}
        }
    `}
`

const Button = styled.button`
    ${buttonBaseStyle}
`

const Link = styled(LinkRouter)`
    ${buttonBaseStyle}
`

export const ButtonPrimary = Button
export const LinkPrimary = Link
