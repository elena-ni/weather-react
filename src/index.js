import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./App.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h2> Homewo </h2>
    <Container fluid> 
      <Weather />
    </Container>
    <small> est</small>
   
  </StrictMode>,
  
  rootElement
);
