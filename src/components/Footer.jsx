import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5>Contact</h5>
            <p><i className="fa fa-map-marker me-2" aria-hidden="true"></i> Omanthai, Vavuniya, Sri Lanka</p>
            <p><i className="fa fa-phone me-2" aria-hidden="true"></i> +94 77 123 4567</p>
            <p>
              <i className="fa fa-envelope me-2" aria-hidden="true"></i>
              <a href="mailto:waste.food.managment@gmail.com" className="text-light text-decoration-none">
                waste.food.managment@gmail.com
              </a>
            </p>
            <div className="mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-2 text-light">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2 text-light">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2 text-light">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5>About</h5>
            <p>
              Waste Food Management is committed to minimizing food waste and helping those in need across Sri Lanka by connecting donors and recipients efficiently.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-6 col-lg-2 mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link to="/donor" className="text-light text-decoration-none">Donor</Link></li>
              <li><Link to="/picker" className="text-light text-decoration-none">Picker</Link></li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="col-md-6 col-lg-4 mb-4">
            <h5>Subscribe</h5>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-primary w-100">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-3 border-top mt-4">
          <p className="mb-0">&copy; {currentYear} All Rights Reserved by <strong>Waste Food Management</strong></p>
        </div>
      </div>
    </footer>
  );
}
