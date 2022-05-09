import { Nav } from "react-bootstrap";
import { HeaderItens } from "./headeritem";

const menuItems =[
    {
        to: '/portaldeacesso/servicos',
        text: 'Seriços'
    },
    {
        to: '/portaldeacesso/inf',
        text: 'Informações'
    }
]

export function HeaderLogIn ({ openSide }) {
    return (
        <Nav
        className="bg-dark bg-gradient ml-auto"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link onClick={openSide}>Alexandre</Nav.Link>
            </Nav.Item>
            {menuItems.map((item, index) => (
              <HeaderItens key={index} item={item} />
            ) )}
            <Nav.Item className="ms-auto">
                <Nav.Link eventKey="disabled">
                Sair
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

