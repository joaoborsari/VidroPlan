import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './pages/Landing';
import NavBar from './components/PageHeader/NavBar';

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ Landing } />
      </Switch>
      
    </BrowserRouter>
  )
}

export default Routes;