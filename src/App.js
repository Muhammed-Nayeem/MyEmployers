//All The Imported Materials:
import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';



//Main React App:
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
