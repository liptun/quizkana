import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { panel } from '../../theme/mixins'

const Container = styled.div`
    ${panel}
`

const Form = styled.form``

const Input = styled.input``
const Submit = styled.input``

interface Props {}

const Answer: FC<Props> = () => {
    const [answer, setAnswer] = useState('')
    return (
        <Container>
            <Form>
                <Input type="text" />
                <Submit type="submit" />
            </Form>
        </Container>
    )
}

export default Answer
