import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Nosotros from '../views/Nosotros/Nosotros';
import Contacto from '../views/Contacto/Contacto';
import Home from '../views/Home/Home';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/Navbar/Navbar";
const RouterApp = () => {
 return (
   <Router>
        <Navbar/>
        <Switch>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryName">
            <ItemListContainer />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
   </Router>
 );
}
export default RouterApp;