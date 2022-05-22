import { store } from "../store/store"
import { dataSelector } from "../store/user/user.selectors"

export const urlApi = process.env.REACT_APP_API_URL

export const getAuthHeaders = () => {
    const state = store.getState()
    const user = dataSelector(state)
    if(user) {
        return {
            'authorization': `Bearer ${user.accessToken}`
        }
    }
    return {}
}