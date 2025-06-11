// import React from 'react';
// import About  from '../pages/About';

// import Contact from '../pages/Contact';
// // import PhotoGallery from '../components/PhotoGallery';

// // import aboutImage from '../assets/image';

















// const Home: React.FC = () => {
//   return (
//     <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
//        <section className="hero">
//          <h1>Welcome to Waste Food Management</h1>
//          <p>Connecting food donors with those in need.</p>
//        </section>
//        <section className="info-section">
//          <h2>How It Works</h2>
//          <p>Donors submit extra food. Pickers find available food nearby. Everyone wins!</p>
//        </section>
   
//         <section className='foodphoto'>You can donate foods </section>


 
    
//      <About/><br/>
//      <Contact/>
     
//  </div>
//   );
// }

// export default Home;





import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HomeBanner from "../assets/image/HomeBanner.jpg"
import Footer from "../components/Footer.jsx"
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-setC text-dark py-5">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={HomeBanner}
              alt="Food Donation"
              className=" IMG img-fluid rounded mb-4"
            />
            <h2 className="fw-bold">Your Kindness Can Fill Someone’s Plate</h2>
            <p className="lead">
              Join hands to reduce food waste and bring a smile to someone in need. Every meal shared is a blessing.
            </p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="container mt-4">
        <About />
        <hr />
      
        <Footer/>
      </div>
    </div>
  );
}

export default Home;




