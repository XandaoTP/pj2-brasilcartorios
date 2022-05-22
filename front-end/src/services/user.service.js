import { urlApi } from "./api.service"
import { removeStorageItem, setStorageItem } from "./storage.service"

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
  return authResponse(dataLogin)
}
export const logoutUser = () => {
    removeStorageItem('user')
}

export const createUser = async (userData) => {
    const body = JSON.stringify({
        ...userData,
        type: 2
    })
    const response = await fetch(`${urlApi}/signup`, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json()
    if(!response.ok) {
        const message = typeof data === 'string'
        ? data
        : 'Response not ok.'
        throw new Error(message)
    }
    return authResponse(data)
}

const authResponse = (data) => {
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}