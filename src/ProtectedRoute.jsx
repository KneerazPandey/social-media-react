import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const ProtectedRoute = ({children}) => {
  const { currentUser } = useContext(AuthContext);
  
  if (currentUser) {
    return (
        <div>
          {children}
        </div>
    );
  }

  return <Navigate to={'/login'} />
  
}

export default ProtectedRoute;