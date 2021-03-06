import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../../services/user.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../store/user/user.action";

export function LoginForm ({ redirectAfterLogin }) {
    const [submiting, setSubmiting] = useState(false)
    const [data, setDate] = useState({
        password: '',
        email: ''
       })
       const SelectForm = (event) => {
        setDate({
           ...data,
           [event.target.name]: event.target.value
        })
     } 
     const dispath = useDispatch()
     const navigate = useNavigate()
     const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setSubmiting(true)
           const userData = await login(data)
           // enviar para redux
           dispath(userLogin(userData))
           if (redirectAfterLogin) {
            navigate('/portaldeacesso')
            }
        }catch (error) {
            const message = error.message === 'Credentials invalid.' || data === 'Cannot find user'
            ? 'E-mail ou senha inválidos.'
            :'Ocorreu um erro'
            console.error(error)
            toast.error(message)
            setSubmiting(false)
     }
    }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h2 text-primary">login</p>
        <Form.Group controlId="login-email" className="h5 mb-3">
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
         <Form.Group controlId="login-password" className="mb-3">
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
         <Button type='submit' variant="success" disabled={submiting}>Entrar</Button>
        </Form>
    )
}