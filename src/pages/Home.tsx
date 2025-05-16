import React from 'react';
import About  from '../pages/About';

import Contact from '../pages/Contact';
// import PhotoGallery from '../components/PhotoGallery';

const Home: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
       <section className="hero">
         <h1>Welcome to Waste Food Management</h1>
         <p>Connecting food donors with those in need.</p>
       </section>
       <section className="info-section">
         <h2>How It Works</h2>
         <p>Donors submit extra food. Pickers find available food nearby. Everyone wins!</p>
       </section>
   
        <p className='hero'>you can donate foods</p>
 
    
     <About/><br/>
     <Contact/>
     
 </div>
  );
}

export default Home;


