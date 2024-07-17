import React from 'react'
import '../../styles/css/SignIn.css'
import signindesign from '../../styles/images/signindesign.png'

function SignIn() {
  return (
    <div className='signin'>
      <div className='sign-div'>
        <p className='sign-title'>SIGN IN</p>
        <input
          className='email-input'
          id='email'
          placeholder='Email'
          required
          />
        <input
          className='password-input'
          id='password'
          placeholder='Password'
          required
          />
        <button type='submit' className='sign-login'>LOGIN</button>
        <button className='forgot'>Forgot your password?</button>
      </div>
      <div>
        <img src={signindesign} alt='siginpic' className='signin-pic'/>
      </div>
    </div>
  )
}

export default SignIn