import React from 'react';
import Main from './Main';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
