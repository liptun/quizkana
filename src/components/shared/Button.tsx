import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const buttonStyle = css`
    ${({ theme }) => css`
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        border-radius: 5px;
        padding: 0.1em;
        cursor: pointer;
        transition: all 0.2s ease-out;

        &:hover {
            background-color: white;
            color: ${theme.colors.primary};
        }
    `}
`

const fancyButtonStylePrimary = css`
    ${({ theme }) => css`
        height: 3em;
        padding: 0;
        overflow: hidden;
        display: block;
        border: 1px solid ${theme.colors.primary};
        text-decoration: none;
        border-radius: 5px;
        span {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
            position: relative;
            padding: 0.2em 0.6em;
            transition: all 0.3s ease-in-out;
            top: 0;
            &:nth-child(1) {
                color: ${theme.colors.primary};
            }
            &:nth-child(2) {
                color: ${theme.colors.foreground};
                background-color: ${theme.colors.primary};
            }
        }
        &:hover {
            span {
                top: -100%;
            }
        }
    `}
`

const fancyButtonStyleSecondary = css`
    ${fancyButtonStylePrimary}
    ${({ theme }) => css`
        border-color: ${theme.colors.secondary};
        span {
            &:nth-child(1) {
                color: ${theme.colors.secondary};
            }
            &:nth-child(2) {
                background-color: ${theme.colors.secondary};
            }
        }
    `}
`

export const ButtonPrimary = styled.button`
    ${buttonStyle}
`
export const LinkPrimary = styled(Link)`
    ${buttonStyle}
`

export const FancyButtonPrimary = styled.button`
    ${fancyButtonStylePrimary}
`
export const FancyLinkPrimary = styled(Link)`
    ${fancyButtonStylePrimary}
`

export const FancyButtonSecondary = styled.button`
    ${fancyButtonStylePrimary}
`
export const FancyLinkSecondary = styled(Link)`
    ${fancyButtonStyleSecondary}
`
