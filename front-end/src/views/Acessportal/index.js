import { Layoutlogin } from "../../components/layoutportal";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { dataSelector } from "../../store/user/user.selectors";
import { Alert } from "react-bootstrap";

export function AccessPortal () {
    const user = useSelector(dataSelector)
    return (
        <Layoutlogin>
            <Title>Acesso aos servicos {user.name}</Title> 
            {user.type === 1 ? (
                <p>Acesse as solicitacoes</p>
            ) : (
                <Alert variant='success'>Solicite servicos</Alert>
            )
             }  
        </Layoutlogin>
    )
}

const Title = styled.h1`
 color: #0d6efd;
 margin-top: 1rem;
`