import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {
  const nameRefContainer = useRef(null);
  const passwordRefContainer = useRef(null);
  const { login } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    login();
  }

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
              <input type="text" name="name" placeholder='Username' ref={nameRefContainer} />
              <input type="password" name="password" placeholder='Password' ref={passwordRefContainer} />
              <button type="submit" onClick={loginHandler}>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login;