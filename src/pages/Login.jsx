import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
const handleHome=()=>{
 navigate('/')
}
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleHome}>back to home</button>
    </div>
  )
}

export default Login
