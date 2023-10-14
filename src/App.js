import React from 'react';
import Calculator from './components/calculator/Calculator'
import Navbar from './components/navbar/Navbar'
import './App.css';
// import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app_container">
    <Navbar/>
    <Calculator/>
    {/* <Footer /> */}
</div>
  );
}

export default App;
