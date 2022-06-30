import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();
  
  const onLogin =  () => {
    
    navigate('/', {
      replace : true
    })


  }

  return (
    <div className="">
      <h1>Login</h1>
      <hr></hr>

      <button className="btn btn-warning"
        onClick={ onLogin }>
          Login

      </button>
    </div>
  )
}
