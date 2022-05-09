import { Layoutlogin } from "../../components/layoutportal";
import styled from 'styled-components'

export function AccessPortal () {
    return (
        <Layoutlogin>
            <Title>Acesso aos servicos</Title>   
        </Layoutlogin>
    )
}

const Title = styled.h1`
 color: #0d6efd;
 margin-top: 1rem;
`