import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { Layoutlogin } from "../../components/layoutportal";
import { Load } from "../../components/Load";
import { PagesPortal } from "../../components/pagesportal";
import { listServices } from "../../services/serv.service";
import { TableListServices } from "./tableservices";

export function CartAreaView () {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchServices = async () => {
        try {
            const data = await listServices()
            setServices(data)
        } catch {
          Toast.erro('Erro ao buscar servicos. Tente novamente recarregando a pagina')  
        }  
        setLoading(false)
    }
        fetchServices()
    }, [])
    return (
        <Layoutlogin>
            <PagesPortal
            title='Servicos oferecidos'
            buttonText='Novo servico'
            buttonLink='/portaldeacesso/servicos/novoservico'/>
        {loading && <Load />}
        <TableListServices services={services} />
        </Layoutlogin>
    )
}