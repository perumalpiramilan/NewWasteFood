import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Donor from './pages/Donor';
import Picker from './pages/Picker';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const [foodList, setFoodList] = useState([]);

  const addFood = (foodItem) => {
    setFoodList([...foodList, foodItem]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor" element={<Donor addFood={addFood} />} />
        <Route path="/picker" element={<Picker foodList={foodList} />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>


   );
 
}
export default App;


