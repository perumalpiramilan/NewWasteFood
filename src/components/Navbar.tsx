import React, {useState,useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheet/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Navbar() {



   const [scrollY, setScrollY] = useState(0);
        useEffect(() => {
          const handleScroll = () => {
            setScrollY(window.scrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
      
         
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
  return (
    <Fragment>

      <header className= {`heder_section fixed-top header-dark ${scrollY > 100 ? 'header-scrolled' : ''} `}>

        <div className='container-fluid'>
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className='navbar-brand'>
              <span>Waste Food Management</span>

            </a>
 




            <div className=" navbar-collapse" >
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link to="/">Home</Link>

                </li> 
                <li className="nav-item active">
                  <Link to="/donor">Donor</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/picker">Picker</Link></li>
                <li className="nav-item active">
                  <Link to="/About">About</Link></li>
                  <li className="nav-item active">
                  <Link to="/login">login</Link> </li>

              </ul>
            </div>
          </nav>
        </div>
      </header>

    </Fragment>
  );
}
export default Navbar;


