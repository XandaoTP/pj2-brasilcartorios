import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Cards } from "../../components/Cards";
import { Layout } from "../../components/Layout";
import { Load } from "../../components/Load";
import { listServices } from "../../services/serv.service";


export function Services () {
    const [services, setServices] = useState([])
    const [load, setLoad] = useState(true)
    const [loadError, setLoaderror] = useState()
    useEffect(() => {
            const services = async () => {  
            try {
               const serv = await listServices()
               setServices(serv)
            }catch {
                setLoaderror('Tivemos um problema. Tente novamente.')
            }
            setLoad(false)
        }
        services()      
    }, [])
    return(
        <div className="bgcardcolor d-flex flex-column flex-grow-1">
        <Layout>
            <Container>
                <h1 className="text-center mt-3 mb-3">SERVIÇOS</h1>
                {load && (
                    <Load />
                )}
                {loadError && (
                    <Alert variant="danger" className="text-center my-5">{loadError}</Alert>
                )}
                <Row className='mb-3'> 
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
        </div>
    )
}