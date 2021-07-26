import { useLRAuth } from "loginradius-react";
import React from 'react';

const Auth = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useLRAuth();
  if (isAuthenticated) {
    return (
      <div>
        <button onClick={() => logout()}>Log out</button>
      </div>
    );
  } else {
    return (
      <button onClick={() => loginWithRedirect("/login")}>
        Login/Register Account
      </button>
    );
  }
};

export default Auth;
