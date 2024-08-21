import { useSelector } from "react-redux"
import { useCurrentToken } from "../redux/features/auth/authSlice"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const token = useSelector(useCurrentToken)
    if (!token) {
        return <Navigate to='/login' replace={true} />
    }
    return children
}

export default ProtectedRoute