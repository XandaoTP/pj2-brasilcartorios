import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../components/Cards";
import { Layout } from "../../components/Layout";

export function Services () {
    return(
        <Layout>
            <Container>
                <h1 className="text-center mt-3 mb-3">SERVIÇOS</h1>
                <Row> 
                    {services.map((serv) =>{
                        return (
                    <Col xs={12} md={6} lg={4} className='mb-3'>             
                        <Cards serv={serv}/>
                    </Col>
                    )
                })}
                </Row>
            </Container>                
        </Layout>
    )
}