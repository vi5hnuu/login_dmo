import { useContext } from 'react';
import AuthContext from '../Context/auth-context';
import styles from './Header.module.css'

function Header(props) {
  const ctx = useContext(AuthContext)

  return <header className={styles['header']}>
    <h2>Login-Demo</h2>
    <nav className={styles['nav']}>
      {ctx.isLoggedIn && <a className={styles['btn']} href='#'>User</a>}
      {ctx.isLoggedIn && <a className={styles['btn']} href='#'>Admin</a>}
      {ctx.isLoggedIn && <button onClick={ctx.onLogOut} className={`${styles['btn-logout']} ${styles['btn']}`}>Log-Out</button>}
    </nav>
  </header>
}

export default Header;