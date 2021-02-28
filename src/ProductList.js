
import Header from './Header';
import {useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductList=()=>{

  const [productlist,setProductList]=useState([])


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{

    let product=await fetch('http://localhost:8000/api/productlist')
    product=await product.json()
    setProductList(product)
    

  },[])

  console.log(productlist)

  


  return(
     
    <div>
      <Header/>
     
     <h1>Product List</h1>

     <Table striped bordered hover>
  <thead>
    <tr >
      <th>id</th>
      <th>name</th>
      <th>picture</th>
      <th>description</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    {
      productlist.map((product)=>{
       return(
      <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td><img src="https://static.toiimg.com/photo/70072353.cms" style={{width:"100px"}}/></td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td><Link><button className="btn btn-danger ">delete</button></Link></td>
      <td><Link to={'/update/'+product.id}><button className="btn btn-success ">Update</button></Link></td>
      
    </tr>
       )
      })
    }
  </tbody>
</Table>

    </div>
  )

}

export default ProductList