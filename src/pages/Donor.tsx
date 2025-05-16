 import React from 'react';
import DonorForm from '../components/DonorForm';
import { useAuth } from '../context/AuthContext';


// function Donor({ addFood }) {
//   return (
//     <div className="donor-page">
//       <DonorForm onAddFood={addFood}/>
//     </div>
//   );
// }
  
type FoodItem = {
  id: number;
  FoodItem: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
};

const Donor = ({ addFood }: { addFood: (item:FoodItem) => void }) => {
  const { user } = useAuth();  // Get the logged-in user

  return (
    <div className="donor-page" ><br /><br />
      <h2>Welcome {user?.name} - Donor Page</h2>
      {/* Passing the onAddFood function to DonorForm */}
      <DonorForm onAddFood={addFood} />


      <section className='donarsection'>
        <h1>How to danate food</h1><br/><br/>
        <p>Fill out the form below with details about the food you want to doante. Include the type of <b> FOOD,QUANTUTY,PICKUP LOCATION and PREFERED PICKUP TIME IN DISCRIPTION. Our team will review your request and arrange for food picker to collect the items.</b></p>
        
        
        </section>
    </div>
  );
};









export default Donor;


