// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: 'donor', // or 'picker'
//   });

//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/api/auth/register', formData);
//       alert('Registration successful! Please log in.');
//       navigate('/login');
//     } catch (error: any) {
//       alert(error.response?.data?.error || 'Registration failed');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <select name="role" onChange={handleChange} required>
//           <option value="donor">Donor</option>
//           <option value="picker">Picker</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole]       = useState('donor'); // or 'picker'
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      alert('Registered successfully!');
      navigate('/login');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email"     value={email}     onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="donor">Donor</option>
          <option value="picker">Picker</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
