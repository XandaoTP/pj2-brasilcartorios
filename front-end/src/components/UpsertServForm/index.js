import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const emptyFormData = {
    name: '',
    subTitle: '',
    description: ''

}

export function UpsertServiceForm ({ initialValue =  emptyFormData, buttonLabel = 'cadastrar', onSubmit }) {
    const [data, setData] = useState(initialValue)
    const handlechange = (event) => {
            setData({
           ...data,
           [event.target.name]: event.target.value
        })
     } 
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="Serv-name">
                <Form.Label className="mb-0">Nome</Form.Label>
                <FormControl 
                placeholder="Nome do serviço"
                name='name'
                value={data.name}
                onChange={handlechange}
                required
                />
            </Form.Group>
            <Form.Group className="mb-2" controlId="Subtitle">
                <Form.Label className="mb-0">Serviço Notarial</Form.Label>
                <FormControl 
                placeholder="Descrição curta do serviço"
                name='subTitle'
                value={data.subTitle}
                onChange={handlechange}
                required
                as='textarea'
                />
            </Form.Group>
            <Form.Group className="mb-2" controlId="description">
                <Form.Label className="mb-0">Descrição completa</Form.Label>
                <FormControl 
                placeholder="Descrição do serviço"
                name='description'
                value={data.description}
                onChange={handlechange}
                required
                as='textarea'
                />
            </Form.Group>
            <Button type='submit'>{buttonLabel}</Button>
        </Form>
    )
}