import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function RegisterLogin () {
    const [data, setDate] = useState({
        password: '',
        email: '',
        name:'',
       })
       const SelectForm = (event) => {
        setDate({
           ...data,
           [event.target.name]: event.target.value
        })
     } 
     const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
     }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h2 text-primary">Cadastro</p>
        <Form.Group controlId="register-name" className="h5 mb-3">
            <Form.Label className="m-0">Nome</Form.Label>
            <Form.Control
            placeholder="Nome"
            value={data.name}
            onChange={SelectForm}
            name='name'
            required
            />
         </Form.Group>
        <Form.Group controlId="register-email" className="h5 mb-3">
            <Form.Label className="m-0">Email</Form.Label>
            <Form.Control
            placeholder="Email"
            value={data.email}
            onChange={SelectForm}
            name='email'
            type='email'
            required
            />
         </Form.Group>
         <Form.Group controlId="register-password" className="mb-3">
            <Form.Label className="m-0 h5">Senha</Form.Label>
            <Form.Control
            placeholder="Senha"
            value={data.password}
            onChange={SelectForm}
            name='password'
            type='password'
            required
            />
         </Form.Group>
         <Button type='submit' variant="success">Entrar</Button>
        </Form>
    )
}