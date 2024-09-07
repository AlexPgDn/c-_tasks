import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* let h1El = document.createElement("h1");
h1El.innerText = "Hello world!";
const root = document.getElementById("root");
root.appendChild(h1El); */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>
    Hello world!
  </h1>
);

