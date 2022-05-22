import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { AuthForm } from "../../components/authform"
import { createIscrip } from "../../services/inscr.service"
import { dataSelector } from "../../store/user/user.selectors"
 
export function Registerform ({ serviceId, onRegister }) {
   const user = useSelector(dataSelector)
   const [noRepeatSub, setNoRepeatSub] = useState(false)
    const handleInscServ = async (event) => {
      try {
         setNoRepeatSub(true)
         await createIscrip({
            name: user.name,
            city: user.city,
            email: user.email,
            serviceId: parseInt(serviceId),
            userId: user.id
         })
         toast.success('Registrado com sucesso')
           onRegister()
      } catch (err) {
         console.error(err)
         toast.error('Ocorreu um erro. Tente novamente.')
      }   
      setNoRepeatSub(false)
   }
    return (
     <>
     <h2 className='text-center' >Inscreva-se no serviço</h2>
     {user ? (
        <Button onClick={handleInscServ} disabled={noRepeatSub} >Inscrever</Button>
     ) :(
        <>
        <p> Faca login ou inscreva-se</p>
        <AuthForm redirectAfterLogin={false} />
        </>
     )}
   </>
   )
}