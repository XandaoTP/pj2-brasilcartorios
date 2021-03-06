import { Alert, Table } from "react-bootstrap";

export function Records ({records}) {
    return (
        <>
            <h2>Cadastros</h2>
            {records.length > 0 ? (
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Protocolo</th>
                        <th>Nome</th>
                        <th>local de pesquisa</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record =>  (
                    <tr key={record.id}>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.city}</td>
                        <td>{record.email}</td>
                    </tr>
                    ))}                
                </tbody>
            </Table>
            ): (
                <Alert>Não existem cadastros para este serviço.</Alert>
            )}
        </>
    )
}