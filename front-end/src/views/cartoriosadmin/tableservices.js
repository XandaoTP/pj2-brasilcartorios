import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteService } from "../../services/serv.service";

export function TableListServices ({ services, onDeleteService }) {
    const [servDelete, setServDelete] = useState()
    const hideModal = () => setServDelete(undefined)
    const deleteSeviceBtn = (service) => {
        setServDelete(service)
  
    }
    const serviceDelete = async () => {
        try {
            await deleteService(servDelete.id)
            await onDeleteService()
            toast.success('Serviço deletado.')
        } catch {
            toast.error('Falha ao deletar seviço.')
        }
        hideModal()
    }
    return (
        <>
        <Modal show={servDelete} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar exclusão do serviço?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Essa confirmação excluirá o serviço {servDelete?.name}.</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick ={hideModal} >Cancelar</Button>
                <Button variant="success" onClick={serviceDelete}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Serviços</th>
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                 <tr key={service.id}>
                     <td>{service.id}</td>
                     <td>{service.name}</td>
                     <td>{service.subTitle}</td>
                     <td className="d-grid gap-1">
                        <Button
                        size="sm"
                        as={Link}
                        to={`/portaldeacesso/serviços/${service.id}`}
                        >Editar</Button>
                        <Button 
                        size="sm"
                        variant="danger"
                        onClick={() => deleteSeviceBtn(service)}
                        >Deletar</Button>                     
                     </td>
                 </tr>   
                ))}
            </tbody>
        </Table>
        </>
    )
}