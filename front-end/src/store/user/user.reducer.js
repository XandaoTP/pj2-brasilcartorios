import { getStorageItem } from "../../services/storage.service"

const userLogin = JSON.parse(getStorageItem('user'))


export const usereducer = (state = userLogin || null, action) => {
    switch(action.type){
        case 'USER_LOGIN' :
            return action.payload
        case 'USER_LOGOUT':
            return null
        default:
            return state        
    }
}