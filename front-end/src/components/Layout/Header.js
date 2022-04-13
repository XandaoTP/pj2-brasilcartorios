import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/brasao-republica.png';


export function Header() {
    return ( 
       <Navbar className="bg-dark bg-gradient" expand={false}>
            <Container pr-2 pl-2>
            <Navbar.Brand className="text-white" href="#"><img src={Logo}></img>Brasil Cartórios</Navbar.Brand>
            <Navbar.Toggle className="bg-light" aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas 
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Brasil Cartórios</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/servicosnotariais">Serviços</Nav.Link>
                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar> 
    )
}

