import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Card from 'react-bootstrap/Card';
import App from "./App.css";
import Footer from " ./Footer";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h2> Ho </h2>
   
    <Footer />

  </StrictMode>,
  
  rootElement
);
