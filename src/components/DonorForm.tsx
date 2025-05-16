import React, { useState } from 'react';

type FoodItem = {
  id: number;
  name: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
};








const DonorForm = ({ onAddFood }: { onAddFood: (foodItem: string) => void }) => {
  const [name, setFoodItem] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();




    if (!name ||!title || !location || !description ) {
      alert('Please enter a food item to donate!');
      return;
    }
    const newFood: FoodItem = {
      id: Date.now(),            // Unique key 1
      timestamp: Date.now(),     // For sorting 2
       
      name,
      title,
      location,
      description,
    };
    // Add food to the list (using the passed function)
    
    onAddFood(newFood);
    
    // Show a donation success alert
   
    alert(`${name} has been donated! Thank you!`);

    // Clear the input field after donation
    setName('');
    setTitle('');
    setLocation('');
    setDescription('');


  };

  return (
    <form className="donor-form" onSubmit={handleDonate}>
      <input
        type="text"
        placeholder="Enter food item to donate"
        value={name}
        onChange={(e) => setFoodItem(e.target.value)}
        required /><br /><br />
      
      <input
        type="quantity"
        placeholder="Food quantity"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      /><br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      /><br /><br />
      
      <button type="submit">Donate Food</button>
    </form>
   



  );
};



export default DonorForm;

