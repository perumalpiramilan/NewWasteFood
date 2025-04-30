import React, { useState } from 'react';

function DonorForm({ onAddFood }) {
  const [food, setFood] = useState({
    title: '',
    quantity: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(food);
    setFood({
      title: '',
      quantity: '',
      location: '',
      description: '',
    });
  };

  return (
    <form className="donor-form" onSubmit={handleSubmit}>
      <h2>Donate Food</h2>
      <input name="title" placeholder="Food Name" value={food.title} onChange={handleChange} required /> 
      <input name="quantity" placeholder="Quantity" value={food.quantity} onChange={handleChange} required />
      <input name="location" placeholder="Pickup Location" value={food.location} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={food.description} onChange={handleChange} />
      <button type="submit">Donate</button>
    </form>
  );
}

export default DonorForm;

