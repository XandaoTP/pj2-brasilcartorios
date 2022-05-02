import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Load } from "../../components/Load";
import { NotFoundView } from "../Notfound";
import { Records } from "./records";
import { Registerform } from "./registerform";
import { getServicesById } from "../../services/serv.service"

export function ServiceInfoView () {
        const { id } = useParams()
        const [service, setService] = useState()
        const [load, setLoad] = useState(true)
        const [error, setError] = useState()
        const fetchServices = useCallback(async () => {
                try {
                    const info = await getServicesById(id)
                    console.log(info)
                    setService(info)
                    setLoad(false)
                } catch (err) {
                    const message = err.message === 'Detailservice is not responding.' ? '404' : 'Tivemos um problema. Tente recarregar a pagina.'
                    setError(message)
                    setLoad(false)
               }
            },[id])        
        useEffect(() => {     
        fetchServices()
        }, [fetchServices])
        if(load) {
            return (
                <Load />
            )
        }
        if (error === '404') {
            return <NotFoundView />
        }
        return (
        <Layout>
            <Container>
                {error ? ( <Alert variant="danger" className="text-center">{error}</Alert>
                ) : (
                <>
                <h1 className="text-center mt-5">{service.name}</h1>
                <p className="text-center text-info">{service.description}</p> 
                <Records records={service.records} />
                </>
                )} 
                <Registerform serviceId={id} onRegister={fetchServices} />
            </Container>   
        </Layout>
    )
}