
import Header from './Header';
import {useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'

const ProductList=()=>{

  const [productlist,setProductList]=useState([])


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