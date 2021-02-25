import {Navbar,Brand,Nav,FormControl,Button,Form,NavDropdown} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom'

function Header(){


 
  const user=JSON.parse(localStorage.getItem('user'));
  //console.warn();
 
  let history=useHistory();


  function logOut(){
    localStorage.clear();
    history.push('./login')

  }


  return(

    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-shop</Navbar.Brand>
    <Nav className="mr-auto nav_bar_wrap">
{
  localStorage.getItem('user')?
  <>
    <Link to='/add' >Add Product</Link>
    <Link to='/update' >Update Product</Link>
    </>:
    <>
    <Link  to='/register' >Sign Up</Link>

     <Link  to='/login' >Login</Link>
    </>
  
 
}
       
      
     
      
    </Nav>
   <Nav>
     {
       localStorage.getItem('user')?
       <>
     <NavDropdown title={ user.name}>
       <NavDropdown.Item ><Link to={"./profile"}>Profile</Link></NavDropdown.Item>
       <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>


     </NavDropdown>
     </>:
     <>
     </>
}

   </Nav>
  </Navbar>
      

    </div>
  )
}

export default Header;