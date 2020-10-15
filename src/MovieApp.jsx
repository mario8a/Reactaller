import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';

export const MovieApp = () => {
   return (
      <div>
         Barra de nav
         <Router>
            <div>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/details" component={MovieDetails}/>
               </Switch>
            </div>
         </Router>
      </div>
   )
}
