import { useReducer } from 'react'
import Input from './Input';
import styles from './Login.module.css'

function emailIsValid(email) {
  return /^[a-zA-Z]+.*@gmail.com$/.test(email)
}
function passIsValid(pass) {
  return pass.trim().length > 7;
}

const initial_estate = { email: '', valid: null }
function emailReducer(pstate, action) {
  if (action.type === 'USER_INPUT') {
    return { email: action.val, valid: emailIsValid(action.val) }
  }
  return initial_estate
}
const initial_pstate = { pass: '', valid: false }
function passReducer(pstate, action) {
  if (action.type === 'USER_INPUT') {
    return { pass: action.val, valid: passIsValid(action.val) }
  }
  return initial_pstate
}
function Login(props) {
  const [emailState, dipatchEmailState] = useReducer(emailReducer, initial_estate)
  const [passState, dipatchPassState] = useReducer(passReducer, initial_pstate)

  function loginHandler(evnt) {
    evnt.preventDefault()
    props.onLogIn()
  }
  function onEmailChange(evnt) {
    const enteredEmail = evnt.target.value.trim()
    dipatchEmailState({ type: 'USER_INPUT', val: enteredEmail })
  }
  function onPassChange(evnt) {
    const enteredPass = evnt.target.value
    dipatchPassState({ type: 'USER_INPUT', val: enteredPass })
  }

  return <div className={styles['login-container']}>
    <form className={styles['login-form']}>
      <Input
        label='Email'
        id='email'
        value={emailState.email}
        onChange={onEmailChange}
        type="email"
        valid={emailState.valid}
        placeholder='kumarvishnu@gmail.com'
      />
      <Input
        label='Password'
        id='password'
        value={passState.pass}
        onChange={onPassChange}
        type="password"
        valid={passState.valid}
        placeholder='***********'
      />

      <div className={styles['login-action']}>
        <button disabled={!emailState.valid || !passState.valid} onClick={loginHandler}>Log-In</button>
      </div>
    </form>
  </div>
}

export default Login;