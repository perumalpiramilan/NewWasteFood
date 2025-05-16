import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Donor from './pages/Donor';
import Picker from './pages/Picker';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRouts';



type FoodItem = {
  id: number;
  FoodItem: string;
  title: string;
  location: string;
  description: string;
  timestamp: number;
  picked?: boolean;
};


function App() {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);


  
  // ✅ Add food and auto-remove after 2 hours
  const addFood = (foodItem: FoodItem) => {
    setFoodList((prevList) => {
      const updatedList = [...prevList, foodItem];

      // Auto-remove after 2 hours
      setTimeout(() => {
        setFoodList((currentList) =>
          currentList.filter((item) => item.id !== foodItem.id)
        );
      }, 2 * 60 * 60 * 1000); // 2 hours

      return updatedList;
    });
  };

  // ✅ Mark item as picked and auto-reset after 1 hour
  const markAsPicked = (id: number) => {
    setFoodList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, picked: true } : item
      )
    );

    // Auto-reset picked after 1 hour
    setTimeout(() => {
      setFoodList((currentList) =>
        currentList.map((item) =>
          item.id === id ? { ...item, picked: false } : item
        )
      );
    }, 1 * 60 * 60 * 1000); // 1 hour
  };
  
  return (

    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/donor"
          element={
            <PrivateRoute>
              <Donor addFood={addFood} />
            </PrivateRoute>
          }
         />



        <Route
          path="/picker"
          element={
            <PrivateRoute>
              <Picker foodList={foodList} onPick={markAsPicked}/>
            </PrivateRoute>
          }
        />
        
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </AuthProvider>



  

      
 

      
   );
  };

 

export default App;
