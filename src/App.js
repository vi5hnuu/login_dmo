import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  const [isLoggeddIn, setIsLoggedIn] = useState(false)
  useState(() => {
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
  return <React.Fragment>
    <Header onLogOut={logOutHandler} />
    {!isLoggeddIn && <Login onLogIn={logInHandler} />}
    {isLoggeddIn && <Main />}
    <Footer />
  </React.Fragment>
}

export default App;
