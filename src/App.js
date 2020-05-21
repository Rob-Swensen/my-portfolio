import React from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import Header from './Components/Header';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);
