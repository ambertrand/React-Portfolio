import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Views/Home';
import About from './Views/About';
import Portfolio from './Components/Portfolio';
import Contact from './Views/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact">
          <Contact />
        </Route>

        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
