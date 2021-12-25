import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './page/home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from './page/userList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/ProductList';
import Product from './page/product/Product';
import NewProduct from './page/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar />
      <div class='container'>
        <Sidebar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={UserList}/>
            <Route path='/user/:userId' component={User}/>
            <Route path='/newuser' component={NewUser}/>
            <Route path='/products' component={ProductList}/>
            <Route path='/product/:productId' component={Product}/>
            <Route path='/newproduct' component={NewProduct}/>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
