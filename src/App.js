import React from 'react';
// import Calculator from './components/calculator/Calculator'
import Navbar from './components/navbar/Navbar'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Invoice from './components/invoice/Invoice'
// import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app_container">
    <Navbar/>
    <Invoice />
   
    {/* <Calculator/> */}
    {/* <Footer /> 
    
    
    */}
</div>
  );
}

export default App;
