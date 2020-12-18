
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProducts from './Components/Home/AddProducts/AddProducts';
import Customize from './Components/Customize/Customize';
import Domain from './Components/Domain/Domain';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Customers from './Components/Customers/Customers';
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/customize">
            <Customize></Customize>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/customers">
            <Customers></Customers>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route exact path="/">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/domain">
            <Domain></Domain>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
