import React, { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { panel } from '../../theme/mixins'

const Container = styled.div`
    ${panel}
`

const CountdownAnimation = keyframes`
    from {width: 100%}
    to {width: 0%}
`

const ProgressBar = styled.div`
    display: flex;
    /* justify-content: center; */
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.primary};
        border-radius: 1em;
        height: 1em;
        padding: 1px;
    `}
`
const ProgressBarInside = styled.div`
    animation-name: ${CountdownAnimation};
    animation-duration: ${5}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        border-radius: 1em;
    `}
`

interface Props {}

const Timer: FC<Props> = () => (
    <Container>
        <ProgressBar>
            <ProgressBarInside></ProgressBarInside>
        </ProgressBar>
    </Container>
)

export default Timer
