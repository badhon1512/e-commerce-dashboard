
import Header from './Header';
import {useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductList=()=>{

  
  const [searchData,setSearchData]=useState('')

  const [productlist,setProductList]=useState([])


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{

    getProduct()
    

  },[])

  async function deleteProduct(id)
  {
    //alert(id)
   // alert('http://localhost:8000/api/delete/'+{id})
    let result= await fetch('http://localhost:8000/api/delete/'+id,{

    method:'delete'
    })
    console.log(result)

    alert("deleted successfully");

    getProduct()
  }


  async function getProduct()
  {
    
    let product=await fetch('http://localhost:8000/api/productlist')
    product=await product.json()
    setProductList(product)
  }

  async function search(value)
  {
    if(value==="")
    {
      getProduct();
    }
    else{
      let product=await fetch('http://localhost:8000/api/search/'+value)
      product=await product.json()
      setProductList(product)
    }
   // alert(value)
    
  }

  


  return(
     
    <div>
      <Header/>
     
     <h1>Product List</h1>

     
     
    
<div  className={'container'}>
<input  onChange={(e)=>{ search(e.target.value)}} className='m-2' style={{marginLeft:"100px" ,float:"right"  } }placeholder="search"/>
     <Table  striped bordered hover>
  <thead>
    <tr >
      <th>id</th>
      <th>name</th>
      <th>picture</th>
      <th>description</th>
      <th>price</th>
      <th>More info</th>
      <th>delete product</th>

      <th>update product</th>
    </tr>
  </thead>
  <tbody>
    {
      productlist.map((product,i)=>{
       return(
      <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td><img style={{height:"150px"}} src='https://www.gizmochina.com/wp-content/uploads/2019/11/Samsung-Galaxy-A51-500x500.jpg' alt='img'/></td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td><Link to={'/update/'+product.id}><button className="btn btn-warning ">more</button></Link></td>
      <td><Link><button onClick={()=>{ deleteProduct(product.id)}} className="btn btn-danger ">delete</button></Link></td>
      <td><Link to={'/update/'+product.id}><button className="btn btn-success ">Update</button></Link></td>
      
    </tr>
       )
      })
    }
  </tbody>
</Table>
</div>

    </div>
  )

}

export default ProductList