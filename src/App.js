import React from 'react';
// import Home from './pages/Homepage';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';




function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/" component={Projects} /> */}


        <div className="navigation">
          {/* <img src="" className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">


            <Link to="/" className="item m-2">About</Link>
            <Link to="/portfolio" className="item m-2">Portfolio</Link>
            {/* <a href="" className="item">About</a> */}
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
