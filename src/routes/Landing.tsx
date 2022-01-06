import { FC } from 'react'
import styled from 'styled-components'
import { LinkPrimary } from '../components/shared/Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Title = styled.h1`
    font-size: 3em;
    margin-bottom: 0.5em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.2em;
`
const Description = styled.p`
    margin-bottom: 1em;
`
const QuickStart = styled(LinkPrimary)``

const Landing: FC = () => {
    return (
        <Container>
            <Title>Quizkana</Title>
            <Description>
                A fun way to practise Japanese syllabary and learn basic
                vocabulary
            </Description>
            <QuickStart to="/quiz">Quick start</QuickStart>
        </Container>
    )
}

export default Landing
