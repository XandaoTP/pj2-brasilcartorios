import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { LoginForm } from "./loginform";
import { RegisterLogin } from "./registerform";

export function AuthForm () {
    return (
        <Row>
            <Col xs={12} lg='auto' className="flex-grow-1 tex-center">
            <LoginForm />
            </Col>
            <Divider xs={12} lg='auto' className='h2' >
            ou
            </Divider>
            <Col xs={12} lg='auto' className="flex-grow-1">
            <RegisterLogin />
            </Col>
        </Row>
    )
}

const Divider = styled(Col)`
text-align:center;
padding: 16px;
align-self:center;
`