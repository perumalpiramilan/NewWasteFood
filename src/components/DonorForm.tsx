import React, { useState } from 'react';
import '../App.css'; // optional for extra styling if needed
import image from "../assets/image/donation2.png"



type FoodItem = {
  id: number;
  name: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
};

interface DonorFormProps {
  onAddFood: (foodItem: FoodItem) => void;
}

const DonorForm: React.FC<DonorFormProps> = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !title || !location || !description) {
      alert('Please fill out all fields before donating.');
      return;
    }

    const newFood: FoodItem = {
      id: Date.now(),
      name,
      title,
      location,
      description,
      timestamp: Date.now(),
    };

    onAddFood(newFood);

    alert(`${name} has been donated! Thank you!`);

    // Reset form
    setName('');
    setTitle('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image or Illustration */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={image} // Replace with your actual image path
            alt="Food donation illustration"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Form */}
        <div className="col-md-6">
          <form className="p-4 bg-light rounded shadow" onSubmit={handleDonate}>
            <h3 className="mb-4 text-center">Donate Food</h3>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Food Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter food name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="e.g., 5 packs, 2 trays"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter pickup location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows={3}
                placeholder="Any special notes, expiry, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Donate Food</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorForm;
