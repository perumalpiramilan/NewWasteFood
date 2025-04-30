// import React from 'react';

// function Login() {
//   return (
//     <div>
//       <h2>Login</h2>
 
//       <form className="login-form">
//         <input type="text" placeholder="Username" /><br /><br/>
//         <input type="password" placeholder="Password" /><br /><br/>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './LoginPage.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // You can add your login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        
        <button type="submit">Login</button>

        <div className="links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>
      </form>
    </div>
  );
}



export default Login;


