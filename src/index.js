import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./App.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h2> Homework </h2>
     <div className="container">
      <Weather />
    </div>
     <small>
        This project was coded by Elena and is open-sourced on{" "}
        <a href="https://github.com/elena-ni/weather-react" target="_blank" rel="noreferrer">
          Github
        </a>
      </small>
   
  </StrictMode>,
  
  rootElement
);
