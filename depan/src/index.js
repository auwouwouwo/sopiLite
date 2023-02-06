import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './page/registerPage';
// import Home from './page/homePage';
// import Login from './page/loginPage';
// import Card from './component/card';
import './css/boostrap/bootstrap.min.css';
import './css/gaya-gayaan.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
    {/* <Home /> */}
    {/* <Login /> */}
    {/* <Card/> */}
  </React.StrictMode>
);


