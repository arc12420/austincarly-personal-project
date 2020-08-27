import React from 'react';
import Navigation from './components/Navigation/Navigation';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import './App.css';
import "./reset.css";

function App(props) {
  console.log(props.location);
  return (
    <div className="app">
      <header className="projectHeader">
        {props.location.pathname === "/" ? null : props.location.pathname === "/Registration" ? null : <Navigation />}
        {routes}
      </header>
    </div>
  );
}

export default withRouter(App);
