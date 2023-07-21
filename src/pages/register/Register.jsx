import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form method='post'>
            <input type="text" name="name" placeholder='Username' />
            <input type="email" name='email' placeholder='Email' />
            <input type="password" name='password' placeholder='Password' />
            <input type="password" name="confirmPassword" placeholder='Confirm Password' />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Novo Social.</h1>
          <p>Join our blog community by registering with your basic information. Create an account to unleash your creativity and connect with fellow bloggers.</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;