import React from 'react';
import FoodList from '../components/FoodList';

function Picker({ foodList }) {
  return (
    <div className="picker-page">
      <FoodList foodList={foodList} />
    </div>
  );
}

export default Picker;



