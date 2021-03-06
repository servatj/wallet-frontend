import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../shared/NavBar';


export const Dashboard = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  return isAuthenticated && (
    <>
      <NavBar logout={logout} />{}
      <h2>Dashboard</h2>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
}
