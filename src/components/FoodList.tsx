import React from 'react';


type FoodItem = {
  id: number;
  name: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
  picked?: boolean;
};


const FoodList = ({
  foodList,
  onPick,
}: {
  foodList: FoodItem[];
  onPick: (id: number) => void;
}) => {



// const FoodList = ({ foodList,onPick }: { foodList: FoodItem[] }) => {
  if (!foodList || foodList.length === 0) {
    return <p>No food items available.</p>;
  }





  // Sort by timestamp (newest first)
  // const sortedList = [...foodList].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="food-list">
      {foodList.map((item) => (
        <div key={item.id} className="food-card" >
          <h3>foods</h3>
          <p><strong>food:</strong> {item.name}</p>
          <p><strong>Quantity:</strong> {item.title}</p>
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Description:</strong> {item.description}</p>

         {/* if picked is false, show button */}
         {!item.picked && (
            <button onClick={() => onPick(item.id)}>Pick</button>
          )}

          {/* if picked is true, show message */}
          {item.picked && (
            <p style={{ color: 'red' }}>Already picked</p>
          )}

         

        </div>
      ))}
    </div>
  );
};



export default FoodList;



