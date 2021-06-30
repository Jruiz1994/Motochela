import React from "react";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import Nosotros from '../views/Nosotros/Nosotros';
import Contacto from '../views/Contacto/Contacto';
import Home from '../views/Home/Home';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
const RouterApp = () => {
 return (
   <Router>
     <div>
       <div>
       <nav>
         <ul>
           <li>
             <Link to="/" className='linksNavbar'>Home</Link>
           </li>
           <li>
             <Link to="/nosotros"  className='linksNavbar'>Nosotros</Link>
           </li>
           <li>
             <Link to="/contacto"  className='linksNavbar'>Contacto</Link>
           </li>
         </ul>
       </nav>
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
     </div>
     </div>
   </Router>

 );
}
export default RouterApp;