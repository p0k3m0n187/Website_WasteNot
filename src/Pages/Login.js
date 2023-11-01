import logo from '../images/dota2.png';
import './Design/logindesign.css';
import React, { useState} from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export const Login = (props) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email);
  }

  return (
    <>
      <Navbar />
      <div className="App">
        <div class="containers">
          <div class="logo">
            <img alt="bodylogo" src={logo} />
          </div>
          <div class="word">
            <p>WELCOME</p>
          </div>
          <div className="login">
            <div class="Label1"></div>
            <form onSubmit={handleSubmit}>
              <lable class="email" hmtlFor="Email">Email</lable>
              <input value={Email} onChange={(e) => setEmail(e.target.value)} type='Email' placeholder='Email' id="Email" name="Email" />
              <br />
              <lable hmtlFor="Password">Password</lable>
              <input value={Password} onChange={(e) => setPassword(e.target.value)} type='Password' placeholder='**********' id="Password" name="Password" />
            </form>
            <button type="Submit" class="LogIn">Log In</button>
            {/* <button class="Register" onClick={() => props.onFormSwitch('Register')}>Register</button>
            <button class="Profile" onClick={() => props.onFormSwitch('Profile')}>Profile</button> */}
            
            <Link to="/register" className="Regist"><button class="Register">Register</button></Link>
            <Link to="/profile" className="Prof"><button class="Profile">Profile</button></Link>


          </div>
        </div>
      </div>

    </>

  )

}

export default Login;
