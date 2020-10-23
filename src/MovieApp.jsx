import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import {NavBar} from './modules/general/NavBar';

export const MovieApp = () => {
   return (
      <div>
         <Router>
         <NavBar/>
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
