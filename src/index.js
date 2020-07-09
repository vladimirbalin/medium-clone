import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from "components/topBar";

const App = () => {
  return (
    <Router>
      <TopBar/>
      <Routes/>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
