import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableListServices ({ services }) {
    const deleteSeviceBtn = (event) => {
        console.log(event)

    }
    return (
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
    )
}