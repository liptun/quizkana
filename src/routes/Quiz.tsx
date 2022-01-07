import React, { FC } from 'react'
import styled from 'styled-components'
import Answer from '../components/quiz/Answer'
import Question from '../components/quiz/Question'
import Timer from '../components/quiz/Timer'

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
`

const Quiz: FC = () => (
    <Container>
        <Question />
        <Timer />
        <Answer />
    </Container>
)

export default Quiz
