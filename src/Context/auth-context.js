import React from "react";
import { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogIn: null,
  onLogOut: null
})

export function AuthContextProvider(props) {
  const [isLoggeddIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === "LOGGED_IN") {
      setIsLoggedIn(true)
    }
  }, [])
  function logOutHandler() {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  }
  function logInHandler() {
    localStorage.setItem('isLoggedIn', "LOGGED_IN")
    setIsLoggedIn(true);
  }
  return <AuthContext.Provider value={{
    isLoggedIn: isLoggeddIn,
    onLogIn: logInHandler,
    onLogOut: logOutHandler
  }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext