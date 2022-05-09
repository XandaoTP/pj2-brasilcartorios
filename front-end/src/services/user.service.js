import { urlApi } from "./api.service"
import { setStorageItem } from "./storage.service"

export const login = async (credentialData) => { 
      const response = await fetch(`${urlApi}/login`, {
       method: 'POST',
       body: JSON.stringify(credentialData),
       headers: {
           'content-type': 'application/json'
       }
   })
    const dataLogin = await response.json()
    if(!response.ok) {
        const message = dataLogin === 'Incorrect password'
        ? 'Credentials invalid.'
        : 'response not ok.'
        throw new Error(message)
  }
  const userData = {
      accessToken: dataLogin.accessToken,
      ...dataLogin.user
  }
  setStorageItem('user', JSON.stringify(userData))
}