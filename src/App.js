import React from 'react';
// import Home from './pages/Homepage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Home from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (   
    <BrowserRouter>
      <div className="App container-fluid d-flex">

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />


        <div className="navigation row">
        {/* <img src={Background} className="logo" alt="Background" /> */}
          <div className="navigation-sub col-sm-12 col-md-4">

            <Link to="/" className="item m-2">Home</Link>
            <Link to="/about" className="item m-2">About Me</Link>
            <Link to="/portfolio" className="item m-2">Portfolio</Link>
            
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
