import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PagesPortal ({ title, buttonLink, buttonText }) {
    return (
        <div className="d-sm-flex align-items-center mt-3 mb-2">
            <h1 className="mb-0">{title}</h1>
            <Button as={Link} to ={buttonLink} size='md' className="ms-sm-3">{buttonText}</Button>
        </div>
    )
}