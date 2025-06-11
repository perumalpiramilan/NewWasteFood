import React from 'react';
// import React, { useState } from 'react';
import FoodList from '../components/FoodList';


type FoodItem = {
  id: number;
  FoodItem: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
  picked?: boolean; // optional, default is false
};


interface PickerProps {
  foodList: FoodItem[];
  onPick: (id: number) => void;
}

function Picker({ foodList, onPick }: PickerProps) {
  return (
    // <div className="picker-page">
    //   <FoodList foodList={foodList} onPick={onPick} />
    //   </div>





<div className="picker-page ">
  <div className="food-grid">
    <FoodList foodList={foodList} onPick={onPick} />
  </div>
</div>




  );
}



export default Picker;

