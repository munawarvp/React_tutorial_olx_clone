import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      setError('Invalid User Credentials')
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          
          <input
            className="input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />

          <br />
          <p style={{color:"red"}}>{error}</p>
          <br />
          <button>Login</button>
        </form>
        <Link className='signup-link' to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
