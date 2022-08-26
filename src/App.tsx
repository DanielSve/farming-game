import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const [crops, setCrops] = useState(["oats", "wheat", "carrots", "potatoes"])
  return (
    <div className="App">
      <Header />
      <Main /> 
    </div>
  );
}

export default App;
