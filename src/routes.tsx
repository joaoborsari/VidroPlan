import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './pages/Landing';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import ScrollToTop from './modules/global/components/ScrollToTop';

function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={ Landing } />
        <Route path="/about-us" exact component={ AboutUs } />
        <Route path="/products" exact component={ Products } />
        <Route path="/galery" exact component={ AboutUs } />
      </Switch>   
    </BrowserRouter>
  )
}

export default Routes;