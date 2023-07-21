import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const login = true;
  
  if (login) {
    return (
        <div>
          {children}
        </div>
    );
  }

  return <Navigate to={'/login'} />
  
}

export default ProtectedRoute;