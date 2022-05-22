import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Layoutlogin } from "../../components/layoutportal";
import { Load } from "../../components/Load";
import { UpsertServiceForm } from "../../components/UpsertServForm";
import { getServicesById, UpdateService } from "../../services/serv.service";

export function EditServicePage () {
    const [submiting, setSubmiting] = useState(false)
    const { id } = useParams()
    const [serv, setServ] = useState()
    useEffect(() => {
        const fetchService = async () => {
            try {
               const servData = await getServicesById(id)
               setServ(servData)
            } catch {
                toast.error('Falha ao buscar serviços. Tente novamente.')
            }
        }
        fetchService()
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async (data) => {
        try {
            setSubmiting(true)
            UpdateService(id, data)
            toast.success('Alteração efetuada com sucesso.')
            navigate('/portaldeacesso/servicos')
        } catch {
            toast.error('Erro ao alterar curso. Tente novamente.')
            setSubmiting(false)
        }
    }
    return (
        <Layoutlogin>
            <h1 className="mt-3">Editar serviços</h1>
            {serv ? (
                <UpsertServiceForm 
                initialValue={{
                    name: serv.name,
                    subTitle: serv.subTitle,
                    description: serv.description              
                }}
                buttonLabel='Alterar'
                onSubmit={handleSubmit}
                disabled={submiting}
                />   
            ):(
                <Load />
            )}
        </Layoutlogin>
    )
}