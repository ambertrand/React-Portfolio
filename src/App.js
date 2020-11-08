import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Project from './Components/Project';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>

      <div className="App container-fluid">
        <Header />

        <div className="row navigation navbar bg-light d-flex">
          <div className="col-12 navigation-sub text-center">

            <Link to="/" className="item navbar-brand m-3">Home</Link>
            <Link to="/about" className="item navbar-brand m-3">About Me</Link>
            <Link to="/portfolio" className="item navbar-brand m-3">Projects</Link>

          </div>
        </div>


        <Route exact path="/" />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Project} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
