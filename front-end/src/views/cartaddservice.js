import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Layoutlogin } from "../components/layoutportal";
import { UpsertServiceForm } from "../components/UpsertServForm";
import { createService } from "../services/serv.service";

export function Addservice () {
    const navigate = useNavigate()
    const handleSubmit = async (data) => {
        try {
            await createService(data)
            toast.success('Serviço cadastrado.')
            navigate('/portaldeacesso/servicos')
        } catch {
            toast.error('Erro ao cadastrar serviço.')
        }
    }
    return (
        <Layoutlogin>
            <h1>Cadastrar novo serviço</h1>
            <UpsertServiceForm onSubmit={handleSubmit} />
        </Layoutlogin>
)}