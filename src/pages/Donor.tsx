import React from 'react';
import DonorForm from '../components/DonorForm';

function Donor({ addFood }) {
  return (
    <div className="donor-page">
      <DonorForm onAddFood={addFood} />
    </div>
  );
}

export default Donor;


