import React, {useState} from 'react'
import './login.css'


export default function Login(){
const [showPass, toggleShowPass] = useState('password')

function handleSubmit(e){
  e.preventDefault()
}
  return(
    <div className='user-login logged'>
      <form onSubmit={handleSubmit}>
        <div className='input-cont'>
          <input type='text' placeholder='Username' />
        </div>
        <div className='input-cont'>
          <input type={showPass} placeholder='Password' />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}