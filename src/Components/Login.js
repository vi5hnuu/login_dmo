// import { useState } from 'react'
// import styles from './Login.module.css'

// function Login(props) {
//   const [email, setEmail] = useState('')
//   const [isEmailValid, setIsEmailValid] = useState(true)
//   const [password, setPassword] = useState('')
//   const [isPasswordValid, setIsPasswordValid] = useState(true)

//   function loginHandler(evnt) {
//     evnt.preventDefault()
//     props.onLogIn()
//   }
//   function onEmailChange(evnt) {
//     const enteredEmail = evnt.target.value.trim()
//     if (!emailIsValid(enteredEmail)) {
//       setIsEmailValid(false)
//     } else {
//       setIsEmailValid(true)
//     }
//     setEmail(enteredEmail)
//   }
//   function onPassChange(evnt) {
//     const enteredPass = evnt.target.value
//     if (!passIsValid(enteredPass)) {
//       setIsPasswordValid(false)
//     } else {
//       setIsPasswordValid(true)
//     }
//     setPassword(enteredPass)
//   }
//   function emailIsValid(email) {
//     return /^[a-zA-Z]+.*@gmail.com$/.test(email)
//   }
//   function passIsValid(pass) {
//     return pass.trim().length > 7;
//   }
//   return <div className={styles['login-container']}>
//     <form className={styles['login-form']}>
//       <div className={styles['login-control']}>
//         <label htmlFor='email'>Email</label>
//         <input
//           value={email}
//           onChange={onEmailChange}
//           className={isEmailValid ? styles['valid'] : styles['invalid']}
//           id='email'
//           type="email"
//           placeholder='kumarvishnu@gmail.com' />
//       </div>
//       <div className={styles['login-control']}>
//         <label htmlFor='password'>Password</label>
//         <input
//           value={password}
//           onChange={onPassChange}
//           className={isPasswordValid ? styles['valid'] : styles['invalid']}
//           id='password'
//           type="password"
//           placeholder='***********' />
//       </div>
//       <div className={styles['login-action']}>
//         <button disabled={!isEmailValid || !isPasswordValid} onClick={loginHandler}>Log-In</button>
//       </div>
//     </form>
//   </div>
// }

// export default Login;

// Using use-reducer

import { useReducer, useState } from 'react'
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
      <div className={styles['login-control']}>
        <label htmlFor='email'>Email</label>
        <input
          value={emailState.email}
          onChange={onEmailChange}
          className={emailState.valid ? styles['valid'] : styles['invalid']}
          id='email'
          type="email"
          placeholder='kumarvishnu@gmail.com' />
      </div>
      <div className={styles['login-control']}>
        <label htmlFor='password'>Password</label>
        <input
          value={passState.pass}
          onChange={onPassChange}
          className={passState.valid ? styles['valid'] : styles['invalid']}
          id='password'
          type="password"
          placeholder='***********' />
      </div>
      <div className={styles['login-action']}>
        <button disabled={!emailState.valid || !passState.valid} onClick={loginHandler}>Log-In</button>
      </div>
    </form>
  </div>
}

export default Login;