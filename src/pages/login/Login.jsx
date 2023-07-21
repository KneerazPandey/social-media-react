import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
          <div className="left">
            <h1>Hello World.</h1>
            <p>Access your account and enjoy personalized features by logging in with your credentials on our secure login page. New users can register for an account, and password reset options are available for forgotten passwords.</p>
            <span>Don't you have an Account?</span>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form method='post'>
              <input type="text" name="name" placeholder='Username' />
              <input type="password" name="password" placeholder='Password' />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login;