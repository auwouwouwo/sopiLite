import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/homePage'
import './index.css';
import './css/boostrap/bootstrap.min.css'
import './OwlCarousel2-2.3.4/docs/assets/owlcarousel/assets/owl.carousel.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
