import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function Cards( { serv } ) {
    return (  
        <Card style={{ width: '18rem' }} className='mt-3 cardservices h-100' >
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{serv.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                {serv.description}
                </Card.Text>
                <div className="d-flex mt-auto">
                    <Card.Link as={Link} to={`/servicosnotarias/${serv.id}`}>Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}