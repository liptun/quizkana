import { Link as LinkRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { themeSchema } from '../../Theme'

const buttonBaseStyle = css`
    ${({ theme }: { theme: themeSchema }) => css`
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        padding: 0.1em;
        border-radius: 5px;
        cursor: pointer;
        transition: all .2s ease-out;

        &:hover {
            background-color: white;
            color: ${theme.colors.primary};
        }
    `}
`

const fancyButtonStyle = css`
    ${buttonBaseStyle}
    height: 3em;
    padding: 0;
    overflow: hidden;
    display: block;
    span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        position: relative;
        padding: 0.2em .6em;
        transition: all 0.2s ease-out;
        top: 0;
    }
    &:hover {
        span {
            color: red;
            top: -100%;
        }
    }
`

const Button = styled.button`
    ${buttonBaseStyle}
`

const Link = styled(LinkRouter)`
    ${buttonBaseStyle}
`

const FancyButton = styled.button`
    ${fancyButtonStyle}
`

const FancyLink = styled(Link)`
    ${fancyButtonStyle}
`

export const ButtonPrimary = Button
export const LinkPrimary = Link

export const FancyButtonPrimary = FancyButton
export const FancyLinkPrimary = FancyLink
