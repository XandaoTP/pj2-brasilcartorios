import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../components/Cards";
import { Layout } from "../../components/Layout";

const services = [
    {
        id: 1,
        name: 'Cartórios de Protesto',
        subTitle: 'Registros de protesto',
        description: 'Localize registros nos cartórios protesto em todo brasil',    
    },
    {
        id: 2,
        name: 'Cartórios de Registro Civil ',
        subTitle: 'Registros de pessoas naturais',
        description: 'Localize registros e solicite certidões nos cartórios de registro civil de todo brasil',    
    },
    {
        id: 3,
        name: 'Cartórios de Títulos e documentos',
        subTitle: 'Registros de títulos e documentos',
        description: 'Localize registros nos cartórios de títulos e documentos de todo brasil',    
    },
    {
        id: 4,
        name: ' Cartório de Imóveis',
        subTitle: 'Registro de imóveis e escrituras',       
        description: 'Localize registros nos cartórios de imoveis de todo brasil',    
    }
]

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