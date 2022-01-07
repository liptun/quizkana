import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { panel } from '../../theme/mixins'

const Container = styled.div`
    ${panel}
    text-align: center;
`

const QuestionText = styled.h2`
    font-size: 3em;
    font-weight: 400;
    ${({ theme }) => css`
        color: ${theme.colors.primary};
    `}
`
const QuestionDescription = styled.h3`
    font-size: 1.2em;
    ${({ theme }) => css`
        color: ${theme.colors.secondary};
    `}
`

interface Props {}

const Question: FC<Props> = () => (
    <Container>
        <QuestionText>はい</QuestionText>
        <QuestionDescription>Lorem ipsum dolor sit amet </QuestionDescription>
    </Container>
)

export default Question
