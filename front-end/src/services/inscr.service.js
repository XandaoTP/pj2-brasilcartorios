export const createIscrip = async (inscripData) => {
   const response = await fetch(`${process.env.REACT_APP_API_URL}/records`,{
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