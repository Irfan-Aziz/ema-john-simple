import React from 'react';

import './App.css';
import Header from './Components/Header';
import Shop from './Components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review';
import Manage from './Components/Manage';
import NotFound from './NotFound';
import ProductDetail from './Components/ProductDetail';



function App() {

  return (
   <div>
    
     <Header></Header>
     <Router>
       <Switch>
         <Route path="/shop">
         <Shop></Shop>
         </Route>
         <Route path="/review">
          <Review></Review>
         </Route>
         <Route path="/manage">
           <Manage></Manage>
         </Route>
         <Route exact path='/'>
         <Shop></Shop>
         </Route>
         <Route path='/Product/:productKey'>
           
          <ProductDetail></ProductDetail>
         </Route>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>
         

       </Switch>
     </Router>

    
   </div>
  );
}

export default App;
