import React from 'react';

function FoodList({ foodList, onRequest }) {
  const handleRequest = (foodItem) => {
    onRequest(foodItem); // send to request list
    alert('You have requested "${foodItem.title}" from ${foodItem.location}');
  };

  return (
    <div>
      <h2>Available Food</h2>
      {foodList.length === 0 ? (
        <p>No food available.</p>
      ) : (
        foodList.map((food, index) => (
          <div key={index}>
            <h3>{food.title}</h3>
            <p>{food.description}</p>
            <p>Quantity: {food.quantity}</p>
            <p>Location: {food.location}</p>
            <button onClick={() => handleRequest(food)}>Request</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FoodList;



