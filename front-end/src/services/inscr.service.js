import { urlApi } from "./api.service"

export const createIscrip = async (inscripData) => {
   const response = await fetch(`${urlApi}/records`,{
        method: 'POST',
        body: JSON.stringify(inscripData),
        headers: {
           'content-type': 'application/json'
        }
    })   
    if(!response.ok){
        throw new Error('Inscription is not ok.')
    }
}