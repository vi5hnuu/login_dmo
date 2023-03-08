import styles from './Header.module.css'

function Header(props) {
  return <header className={styles['header']}>
    <h2>Login-Demo</h2>
    <nav className={styles['nav']}>
      <a className={styles['btn']} href='#'>User</a>
      <a className={styles['btn']} href='#'>Admin</a>
      <button onClick={props.onLogOut} className={`${styles['btn-logout']} ${styles['btn']}`}>Log-Out</button>
    </nav>
  </header>
}

export default Header;