export const listServices = async () => {
    const listServ = await fetch(`${process.env.REACT_APP_API_URL}/services`)
    if(!listServ.ok) {
        throw new Error(`services is not responding.`)
    }
    return listServ.json()
}

export const getServicesById = async (servId) => {
    const detailService = await fetch(`${process.env.REACT_APP_API_URL}/services/${servId}?_embed=records`)
    if(!detailService.ok) {
     throw new Error('Detailservice is not responding.')
    }
   return detailService.json()
}
