import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function Cards( { serv } ) {
    return (  
        <Card style={{ width: '18rem' }} className='mt-3 cardservices h-100' >
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="text-center text-success">{serv.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">{serv.subTitle}</Card.Subtitle>
                <Card.Text className='text-center'>
                    {serv.description}
                </Card.Text>
                <div className="d-flex mt-auto justify-content-center">
                    <Card.Link as={Link} to={`/servicosnotariais/${serv.id}`}>Conheça e solicite</Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}