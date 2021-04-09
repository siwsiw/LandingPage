import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './Components/Navigation';
import Masthead from './Components/Masthead';
import Services from './Components/Services';
import PortfolioGrid from './Components/PortfolioGrid';
import About from './Components/About';
import Team from './Components/Team';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Modal1 from './Components/PortfoliosModals/Modal1';
import Modal2 from './Components/PortfoliosModals/Modal2';
import Modal3 from './Components/PortfoliosModals/Modal3';
import Modal4 from './Components/PortfoliosModals/Modal4';
import Modal5 from './Components/PortfoliosModals/Modal5';
import Modal6 from './Components/PortfoliosModals/Modal6';





function App() {
 
    return (
      <div className="App">
          <Navigation/>
          <Masthead/>
          <Services/>
          <PortfolioGrid/>
          <About/>
          <Team/>
          <Clients/>
          <Contact/>
          <Footer/>
          <Modal1/>
          <Modal2/>
          <Modal3/>
          <Modal4/>
          <Modal5/>
          <Modal6/>

      </div>
    );
  
  }
  

export default App;
