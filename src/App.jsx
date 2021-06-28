import './App.css';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './views/Nosotros/Nosotros';
import Contacto from './views/Contacto/Contacto';
import Home from './views/Home/Home';
import ItemDetail from './views/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return ( <>
      <Router>
        <Navbar/>
        <Switch>
					<Route path='/' exact component={Home} />
					<Route path='/nosotros' component={Nosotros} />
					<Route path='/contacto' exact component={Contacto} />
					<Route path='/detail/:id' component={ItemDetail} />
				</Switch>
        </Router>
        </>
    );
}

export default App;