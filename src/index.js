import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Homepage from './Layout/Homepage/HomePage';
import MyComponents from './Layout/Hooks/MyComponents';

/* let h1El = document.createElement("h1");
h1El.innerText = "Hello world!";
const root = document.getElementById("root");
root.appendChild(h1El); */
const root = ReactDOM.createRoot(document.getElementById('root'));

 const getRandom = () => {
  return Math.ceil(Math.random() * 10)
 }

root.render(
  <Homepage/> 
  //<MyComponents/>
);

