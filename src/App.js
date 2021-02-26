import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Route} from 'react-router-dom'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';
import Protected from './Protected';
import Login from './Login';
import Profile from './Profile'

import ProductList from './ProductList'



function App() {
  return (
    <div className="App" >



<Route path='/add' >
<Protected Cmp={AddProduct} />
</Route>
<Route path='/register' >
  <Protected Cmp={Register} />
  </Route>

<Route path='/update' >
  <Protected Cmp={UpdateProduct} />
  </Route>

  <Route path='/login'>

<Login/>

  </Route>


  <Route path={'/profile'}>
    <Profile/>
  </Route>

  <Route path={'/productlist'}>
    <ProductList/>
  </Route>


   

   


     
    </div>
  );
}

export default App;
