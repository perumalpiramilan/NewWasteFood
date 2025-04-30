 import React from 'react';
 import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <nav className="navbar">
      <h1>Waste Food Management</h1>
      <div>
      <Link to="/">Home</Link>
         <Link to="/donor">Donor</Link>
         <Link to="/picker">Picker</Link>
         <Link to="/login">login</Link> 
         <Link to="/About">About</Link>
         <Link to="/Contact">Contact Us</Link>
       </div>
     </nav>
   );
 }

 export default Navbar;


