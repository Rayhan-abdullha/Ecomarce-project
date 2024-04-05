import { useState } from "react"
import Login from "../components/auth/Login"
import Registration from '../components/auth/Registration'

const AuthPage = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div>
            {
                toggle ? <Login handleToggle={setToggle}/> : <Registration handleToggle={setToggle}/>
            }
        </div>
    )
}

export default AuthPage