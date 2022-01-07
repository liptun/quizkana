import { FC } from 'react'
import styled from 'styled-components'
import { FancyLinkPrimary } from '../components/shared/Button'
import { panel } from '../theme/mixins'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    padding: 1em;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${panel}
`

const Title = styled.h1`
    font-size: 3em;
    margin-bottom: 0.5em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`
const Description = styled.p`
    margin-bottom: 1em;
`

const Landing: FC = () => {
    return (
        <Container>
            <Box>
                <Title>Quizkana</Title>
                <Description>
                    A fun way to practise Japanese syllabary and learn basic
                    vocabulary
                </Description>
                <FancyLinkPrimary to="/quiz">
                    <span>Quick start</span>
                    <span>クイックスタート</span>
                </FancyLinkPrimary>
            </Box>
        </Container>
    )
}

export default Landing
