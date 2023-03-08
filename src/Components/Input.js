import styles from './Input.module.css'

function Input(props) {
  return <div className={styles['login-control']}>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      value={props.value}
      onChange={props.onChange}
      className={props.valid ? styles['valid'] : styles['invalid']}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder} />
  </div>
}

export default Input;