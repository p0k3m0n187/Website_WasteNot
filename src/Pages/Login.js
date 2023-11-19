import logo from '../images/dota2.png';
import './Design/logindesign.css';
import React, { useState } from 'react';
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
            <form onSubmit={handleSubmit}>
              <label className="emailLabel" htmlFor="Email">Email</label>
              <br />
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                id="Email"
                name="Email"
                className="emailInput"
              />
              <br />
              <label htmlFor="Password">Password</label>
              <br />
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="**********"
                id="Password"
                name="Password"
                className="passwordInput"
              />
          <Link to="/homepage"><button type="Submit" class="LogIn">Log In</button></Link>
          <Link to="/register" className="Regist"><button class="Register">Register</button></Link>
          </form>
          </div>
        </div>
      </div>


    </>

  )

}

export default Login;
