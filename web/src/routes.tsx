import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/PageHeader/NavBar';
import Landing from './pages/Landing';
import { AboutUs } from './pages/AboutUs';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landing } />
        <Route path="/about-us" exact component={ AboutUs } />
        <Route path="/products" exact component={ AboutUs } />
        <Route path="/galery" exact component={ AboutUs } />
        <Route path="/contact" exact component={ AboutUs } />
      </Switch>   
    </BrowserRouter>
  )
}

export default Routes;