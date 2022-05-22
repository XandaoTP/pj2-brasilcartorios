import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { LoginForm } from "./loginform";
import { RegisterLogin } from "./registerform";

export function AuthForm ({ redirectAfterLogin = true }) {
    return (
        <Row>
            <Col xs={12} lg='auto' className="flex-grow-1 tex-center">
            <LoginForm redirectAfterLogin={redirectAfterLogin} />
            </Col>
            <Divider xs={12} lg='auto' className='h2' >
            ou
            </Divider>
            <Col xs={12} lg='auto' className="flex-grow-1">
            <RegisterLogin redirectAfterLogin={redirectAfterLogin} />
            </Col>
        </Row>
    )
}

const Divider = styled(Col)`
text-align:center;
padding: 16px;
align-self:center;
`