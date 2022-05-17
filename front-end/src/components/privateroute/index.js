import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { dataSelector } from "../../store/user/user.selectors"

export function PrivateRoute ({ children }) {
    const user = useSelector(dataSelector)
    if(!user) {
        return <Navigate to="/login" />
    }
    return children
}