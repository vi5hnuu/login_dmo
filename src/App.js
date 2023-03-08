import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Main from './Components/Main';
import React, { useContext } from 'react';
import AuthContext from './Context/auth-context';

function App() {
  const ctx = useContext(AuthContext)
  return <React.Fragment>
    <Header />
    {!ctx.isLoggedIn && <Login onLogIn={ctx.onLogIn} />}
    {ctx.isLoggedIn && <Main />}
    <Footer />
  </React.Fragment>
}

export default App;
