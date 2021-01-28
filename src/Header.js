import {Navbar,Brand,Nav,FormControl,Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header(){


  return(

    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">E-shop</Navbar.Brand>
    <Nav className="mr-auto nav_bar_wrap">
      <Link to='/add' >Add Product</Link>
      <Link to='/update' >Update Product</Link>
      <Link  to='/register' >Sign Up</Link>

      <Link  to='/login' >Login</Link>
     
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      

    </div>
  )
}

export default Header;