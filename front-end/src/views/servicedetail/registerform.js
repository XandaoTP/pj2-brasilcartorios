import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"

export function Registerform ({ serviceId }) {
   const [registerSuccess, setRegisterSuccess] = useState(false)
   const [error, setError] = useState()
   const [noRepeatSub, setNoRepeatSub] = useState(false)
    const [data, setDate] = useState({
       user: '',
       city: '',
       email: ''
      })
    const SelectForm = (event) => {
       setDate({
          ...data,
          [event.target.name]: event.target.value
       })
    }   
    const handleSubmit = async (event) => {
       event.preventDefault()
      try {
         setError()
         setNoRepeatSub(true)
         await fetch(`${process.env.REACT_APP_API_URL}/records`,{
            method: 'POST',
            body: JSON.stringify({
               name: data.user,
               city: data.city,
               email: data.email,
               serviceId: parseInt(serviceId)
            }),
            headers: {
               'content-type': 'application/json'
            }
         })
         setRegisterSuccess(true)
      } catch (err) {
         console.error(err)
         setError('Ocorreu um erro. Tente novamente.')
      }   
      setNoRepeatSub(false)
   }
    return (
     <>
     <h2 className='text-center' >Inscreva-se no serviço</h2>
     {registerSuccess && (
        <Alert variant="success" dismissible onClose={() => setRegisterSuccess(false)}> Registrado com sucesso</Alert>
     )}
     {error && (
        <Alert variant="danger" dismissible onClose={() => setError(false)}>{error}</Alert>
     )}
     <Form onSubmit={handleSubmit}>
         <Form.Group controlId="register-name" className="mb-3">
            <Form.Label className="m-0">Nome</Form.Label>
            <Form.Control
            placeholder="Insira seu nome"
            value={data.user}
            onChange={SelectForm}
            name='user'
            required
            />
         </Form.Group>
         <Form.Group controlId="register-city" className="mb-3">
            <Form.Label className="m-0">Local de pesquisa</Form.Label>
            <Form.Control
            placeholder="Insira o local de pesquisa"
            value={data.city}
            onChange={SelectForm}
            name='city'
            required
            />
         </Form.Group>
         <Form.Group controlId="register-email" className="mb-3">
            <Form.Label className="m-0">Email para contato</Form.Label>
            <Form.Control
            placeholder="Email de contato"
            value={data.email}
            onChange={SelectForm}
            name='email'
            type='email'
            />
         </Form.Group>
         <Button type='submit' variant="success"  disabled={noRepeatSub}>Registrar</Button>
     </Form>
     </>
    )
}

{/* <h2>Realize seu Cadastros</h2>
<input
placeholder="Digite seu nome"
value={registerName}
onChange={(event) => setRegisterName(event.target.value)}
/> */}