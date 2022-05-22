import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../services/user.service";
import { userLogin } from "../../store/user/user.action";

export function RegisterLogin ({ redirectAfterLogin }) {
   const [submiting, setSubmiting] = useState(false)
   const [data, setDate] = useState({
        password: '',
        email: '',
        name:'',
        city:'',
       })
       const SelectForm = (event) => {
        setDate({
           ...data,
           [event.target.name]: event.target.value
        })
     } 
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const handleSubmit = async (event) => {
        event.preventDefault()
        try {
           setSubmiting(true)
           const userData = await createUser(data)
           dispatch(userLogin(userData))
           if (redirectAfterLogin) {
           navigate('/portaldeacesso')
           }
        }catch (error){
           const messageError = error.message === 'Email already exists'
           ? 'Email ja cadastrado'
           : 'Erro ao se cadastrar.'
         toast.error(messageError)
         setSubmiting(false)
        }
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
         <Form.Group controlId="register-city" className="h5 mb-3">
            <Form.Label className="m-0">Local de pesquisa</Form.Label>
            <Form.Control
            placeholder="Local de pesquisa"
            value={data.city}
            onChange={SelectForm}
            name='city'
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
            minLength={4}
            />
         </Form.Group>
         <Button type='submit' variant="success" disabled={submiting}>Entrar</Button>
        </Form>
    )
}