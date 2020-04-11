import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
         </ul>
      </nav>
    </div>

      <Switch>
        <Route path="/about"> <About /> </Route>
        <Route path="/contact"><Contact /> </Route>
        <Route path="/"> <Home/> </Route>
      </Switch> 

    </Router> 
  );
}

function Home(){
  return <h1>Welcome to home</h1>
}

function Contact(){
  return <h1>Welcome to contact page</h1>
}

function About(){
  return <h1>Welcome to About page</h1>
}

export default App;
