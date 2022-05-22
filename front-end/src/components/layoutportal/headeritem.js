import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function HeaderItens({ item }) {
   const resolved = useResolvedPath(item.to)
   const match = useMatch({ path: resolved.pathname, end: item.checkAllPath })
    return (
        <Nav.Item>
            <Nav.Link active={match} as={Link} to={item.to}>{item.text}</Nav.Link>
        </Nav.Item>
    )
}