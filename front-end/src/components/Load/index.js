import { Spinner } from "react-bootstrap";

export function Load () {
    return (
        <div className="text-center my-3">
        <Spinner animation="grow" role="status">
            <span className="visually-hidden">Carregando...</span>
        </Spinner>
        </div>
    )
}