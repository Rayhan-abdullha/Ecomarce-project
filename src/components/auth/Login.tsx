import React from 'react'
const Login = ({ handleToggle }: { handleToggle: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div>
            login
            
            <button onClick={handleToggle}>Create your accout</button>
        </div>
    )
}

export default Login