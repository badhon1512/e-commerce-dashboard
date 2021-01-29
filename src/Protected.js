import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Route } from 'react-router-dom'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';


function Protected(props) {

  let history = useHistory();
  let Cmp = props.Cmp;

  useEffect(()=>{
  
    if(!localStorage.getItem('user')){
      history.push('./register')
    }
    
  },[])
    return (
    <div className="App" >

     <Cmp/>


     







    </div>
  );
}

export default Protected;
