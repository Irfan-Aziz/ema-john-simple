import React, { createContext } from 'react';

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
import Login from './Components/Login';
import  {  AuthContextProvider, PrivateRoute } from './Components/useAuth';
import Shipment from './Components/Shipment';


function App(props) {
const user={name:'ant',email:'asd@ymail.com'}
  return (
   <div>
      <AuthContextProvider>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/Product/:productKey'>
            
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
          

        </Switch>
      </Router>
      
      </AuthContextProvider>
   </div>
  );
}

export default App;
