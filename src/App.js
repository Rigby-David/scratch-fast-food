/* eslint-disable react/no-unescaped-entities */
import './App.css';
import { useState } from 'react';
import ChickenDropdown from './ChickenDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import OrderImages from './OrderImages';
import OrderNameInput from './OrderNameInput';

function App() {
  // track state here
  const [chickenId, setChickenId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('');


  return (
    <div className="App">
      {/* order name here */}
      <OrderImages chickenId={chickenId} sideId={sideId} drinkId={drinkId} />
      <h1>
        Welcome to David's Hot Chicken!
      </h1>
      <h2>
        {orderName}'s order
      </h2>
      <OrderNameInput setOrderName={setOrderName} />
      <div>
        <section className='dropdowns'>
          <ChickenDropdown setChickenId={setChickenId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
          <SideDropdown setSideId={setSideId} />
        </section>
        {/* insturctions Form here */}
      </div>
    </div>
  );
}

export default App;
