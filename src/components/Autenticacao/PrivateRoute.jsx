import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Autenticacao/AuthProvider';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext)

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute
