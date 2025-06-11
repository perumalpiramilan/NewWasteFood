// import React, {  useState } from 'react';
// import './LoginPage.css'
// import { useAuth } from '../context/AuthContext';  // ✅ IMPORT
  
// import { useNavigate } from 'react-router-dom';
 
// // import AboutImage from '../assets/image/logback.jpg'; 


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { login } = useAuth(); // ✅ Moved inside the component
//   const navigate = useNavigate();


  

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (email.trim() === '' || password.trim() === '') return;

//   try {
//     // Call backend login API
//     const response = await fetch('http://localhost:3000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email:'donor1@example.com', password:'password123', }),
//     });

//     if (!response.ok) {
//       throw new Error('Login failed');
//     }


  


    


//     const data = await response.json();

//     // Save token to localStorage
//     localStorage.setItem('token', data.token);

//     // Update auth context (pass user info if you have it in response)
//     login({ id: data.user.id, name: data.user.name.email });

//     // Redirect to donor page
//     navigate('/donor');
//   } catch (error) {
//     alert('Login failed: Invalid email or password');
//     console.error(error);
//   }
// };


//    return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2><center><b>Login To your Account</b></center></h2><br/>
        
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
        
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required 
//         />
        
//         <button type="submit">Login</button>

//         <div className="links">
//           <a href="#"><h3>Forgot Password?</h3></a>
//           <a href="#"><h3>Create Account</h3></a>
//         </div>
//       </form>
// {/*    
//      <section className='log'>
//      <img src={AboutImage} alt="Shaking Up and Down" className="shake-up-down"style={{float: 'right', width: '600px' }} />
//      </section> */}



//     </div>
//   );

 
// }



// export default Login;


import React, { useState } from 'react';
import './LoginPage.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // ✅ use actual user input
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // ✅ Save token and login user
      localStorage.setItem('token', data.token);
      login({
        id: data.user.id,
        name: data.user.username,
        role: data.user.role,
      });

      // ✅ Redirect to donor page
      navigate('/donor');
    } catch (error) {
      alert('Login failed: Invalid email or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <form className="login-form" onSubmit={handleLogin}>
        <h2><center><b>Login To your Account</b></center></h2><br />

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
           <h3>Forgot Password?</h3> 
          {/* <a href="#"><h3>Create Account</h3></a> */}


<p className="register">
  Don’t have an account?{' '}<br/>
  <Link to="/register" className="text-blue-600 hover:underline">
   <b> Register here </b>
  </Link>
</p>



        </div>
      </form>

      {/* Optional image section you had commented out */}
      {/* 
      <section className='log'>
        <img 
          src={AboutImage} 
          alt="Shaking Up and Down" 
          className="shake-up-down"
          style={{ float: 'right', width: '600px' }} 
        />
      </section> 
      */}
    </div>
  );
}

export default Login;
