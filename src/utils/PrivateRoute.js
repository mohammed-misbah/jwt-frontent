import { Router ,Redirect} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
       <Router {...rest}>{!user ? <Redirect  to = "/login" /> : children}</Router>
    )
}

export default PrivateRoute;