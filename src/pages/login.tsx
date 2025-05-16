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



import React, {  useState } from 'react';
import './LoginPage.css'
import { useAuth } from '../context/AuthContext';  // ✅ IMPORT
  
import { useNavigate } from 'react-router-dom';
 
import AboutImage from '../assets/image/logback.jpg'; 


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth(); // ✅ Moved inside the component
  const navigate = useNavigate();


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Logging in with:', email, password);
   
    // You can add your login logic here
 
     // 🔐 You could add actual email/password validation here
     if (email.trim() === '') return;

     // ✅ Login with dummy user data
     login({ id: '1', name: email });
 
     // ✅ Redirect to donor page
     navigate('/donor'); };

   return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2><center><b>Login To your Account</b></center></h2><br/>
        
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
          <a href="#"><h3>Forgot Password?</h3></a>
          <a href="#"><h3>Create Account</h3></a>
        </div>
      </form>
{/*    
     <section className='log'>
     <img src={AboutImage} alt="Shaking Up and Down" className="shake-up-down"style={{float: 'right', width: '600px' }} />
     </section> */}



    </div>
  );

 
}



export default Login;
