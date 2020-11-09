import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>

      <div className="App container-fluid">
        <Header />

        <div className="row navigation navbar bg-light d-flex">
          <div className="col-12 navigation-sub text-center">

            <Link to="/" className="item navbar-brand m-3">Home</Link>
            <Link to="/about" className="item navbar-brand m-3">About Me</Link>
            <Link to="/portfolio" className="item navbar-brand m-3">Projects</Link>
            <Link to="/contact" className="item navbar-brand m-3">Contact</Link>

          </div>
        </div>

        <Route exact path="/" />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
