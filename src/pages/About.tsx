import React from 'react';
import aboutImage from '../assets/image/one.png';
import '../App.css';


const About: React.FC = () => {
return (
  <div>


  <section className='About' >
    <h1>About Us</h1>
    <hr/>
    <p></p>
    <img src={aboutImage} alt="Shaking Up and Down" className="shake-up-down"style={{float: 'right', width: '600px' }} />
 </section>
 
<section className='aboutpara'>
<p><h3>
At <b>Waste food management</b>, we believe that no food should go to waste when so many go hungry. Our mission is to bridge the gap between surplus and scarcity by efficiently managing, redistributing, and reducing food waste.<br/><hr/>
We are a team of passionate individuals committed to addressing the issue of food waste in Srilanka. Our goal is to create a system that connects food donors with charities and NGOs, while also reducing the environmental impact of food waste.
</h3></p>
</section>
 </div>
);
};



export default About;
