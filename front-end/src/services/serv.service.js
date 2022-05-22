import { getAuthHeaders, urlApi } from "./api.service"

export const listServices = async () => {
    const listServ = await fetch(`${urlApi}/services`)
    if(!listServ.ok) {
        throw new Error(`services is not responding.`)
    }
    return listServ.json()
}

export const getServicesById = async (servId) => {
    const detailService = await fetch(`${urlApi}/services/${servId}?_embed=records`)
    if(!detailService.ok) {
     throw new Error('Detailservice is not responding.')
    }
   return detailService.json()
}

export const deleteService = async serviceId => {
    const response = await fetch (`${urlApi}/services/${serviceId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
    })
    if(!response.ok) {
    throw new Error('Response not ok.')
    }
}

export const createService = async serviceData => {
    const body = JSON.stringify(serviceData)
    console.log('oi', body)
    const response = await fetch(`${urlApi}/services`, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json',
            ...getAuthHeaders()
        }
    }) 
    if(!response.ok) {
        throw new Error('Response is not ok.')
    }
}

export const UpdateService = async (serviceId, serviceData) => {
    const body = JSON.stringify(serviceData)
    const response = await fetch(`${urlApi}/services/${serviceId}`, {
        method: 'PUT',
        body,
        headers: { 
            'content-type': 'application/json',
            ...getAuthHeaders()
        }
    })
    if(!response.ok) {
        throw new Error ('Response not ok.')
    }
}
