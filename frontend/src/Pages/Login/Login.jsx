import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginContent container">
            <h2>Login</h2>
            <div className="inputs">
                <input type="text" placeholder='first name'/>
                <input type="text" placeholder='last name'/>
            </div>
            <button>Login</button>
            <p>
                do not you remember your password ?
            </p>
            <p>
                create a new account
            </p>
            
        </div>
    </div>
  )
}

export default Login