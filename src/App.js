import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div >

      <Router>
        <Header title={"Legrosports"} logo={"resources/runnerLogo.png"}/>

        <Home />

        <Footer />

      </Router>

    </div>
  );
}

export default App;
