import React from 'react';
import aboutImage from '../assets/image/homeless-hungry-god-bless-sign.jpg';
import '../App.css';

const About: React.FC = () => {
  return (
    <div style={{
  backgroundColor: 'rgb(189, 185, 184)',  
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  minHeight: '100vh'
}}  >
      <div className="container py-5">
        <section className="text-center mb-5">
          <h1 className="display-4">About Us</h1>
          <hr className="w-25 mx-auto" />
          <p className="lead">
            At <strong>Waste Food Management</strong>, we believe that no food should go to waste while people go hungry.
          </p>
        </section>

      
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={aboutImage}
              alt="Food Donation"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Who We Are</h3>
            <p>
              We are a passionate team working to reduce food waste in Sri Lanka. Our system connects food donors with
              NGOs, shelters, and people in need — minimizing waste while making a real difference.
            </p>
          </div>
        </div>

        
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h4 className="text-primary">Our Vision</h4>
            <p>
              A hunger-free Sri Lanka where surplus food is efficiently used to feed the needy instead of being wasted.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-success">Our Mission</h4>
            <p>
              To create a reliable and easy-to-use platform that bridges the gap between donors and receivers of food,
              encouraging responsibility and compassion.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-warning">Our Motivation</h4>
            <p>
              Seeing good food being thrown away while families go to bed hungry motivates us to act. Together, we can
              change that.
            </p>
          </div>
        </div>

    
        <section className="bg-light p-4 rounded text-center shadow mb-5">
          <h4 className="mb-3">Why Your Donation Matters</h4>
          <p>
            Every plate of food you donate helps someone in need and keeps edible food from being wasted. Your small act
            of kindness has the power to make a huge impact in someone’s life — from children in shelters to elderly
            citizens without support.
          </p>
          <p className="font-italic text-muted">
            Let your waste food be someone’s lifesaving meal.
          </p>
        </section>

       <section className="mb-5">
          <h3 className="text-center mb-4">How It Works: Steps for Donors</h3>
          <div className="d-flex flex-column align-items-start gap-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {/* Step 1 */}
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                style={{ width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                1
              </div>
              <div>
                <h5>Register</h5>
                <p className="mb-0">Create your donor account on our platform to start donating.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center me-3"
                style={{ width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                2
              </div>
              <div>
                <h5>Add Food Donations</h5>
                <p className="mb-0">List surplus food items you want to donate with details.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle bg-warning text-dark d-flex justify-content-center align-items-center me-3"
                style={{ width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                3
              </div>
              <div>
                <h5>Food Picked Up</h5>
                <p className="mb-0">Approved NGOs or individuals collect the food from you.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
