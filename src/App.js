import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Route} from 'react-router-dom'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';


function App() {
  return (
    <div className="App" >
<Header/>


<Route path='/add' ><AddProduct/></Route>
<Route path='/register' ><Register/></Route>

<Route path='/update' ><UpdateProduct/></Route>


   

   


     
    </div>
  );
}

export default App;
