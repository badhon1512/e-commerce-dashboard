
import Header from './Header';

import {useEffect,useState} from 'react'

import {withRouter} from 'react-router-dom'

function UpdateProduct(props)
{

  const [product,setProduct]=useState({id:'',name:'',file_path:'',description:'',price:''})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{


    let result= await fetch('http://localhost:8000/api/update/'+props.match.params.id,{
      method:'get'

    })
    result=await result.json()
    setProduct(result)

  },[])

  async function updateProduct(e)
  {

    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    let  item=  {name:product.name,description:product.description,price:product.price}
    

    

    let result=await fetch('http://localhost:8000/api/updateproduct/'+product.id+'?_method=PUT',{
      method:'post',
      body:JSON.stringify(item)
    })

    result=await result.json()
    console.log(result)

    alert("updated successfully", product.name);


  }

  

 

  const updateHandle=(e)=>{
    e.preventDefault();

    
  }


  return(
    <div>
      <Header/>
     
      <h1>Update Product</h1>


<form className="col-sm-4  offset-4">
      <input value={product.id}  className="form-control" disabled placeholder="id" type="text"/>
      <br/> <br/>
      <input defaultValue={product.name} onChange={(e)=>setProduct({...product,"name": e.target.value})}  className="form-control"  placeholder="name" type="text"/>
      <br/> <br/>
      <input onChange={(e)=>setProduct({...product,"file_path": e.target.value})} className="form-control"  placeholder="picture" type="file"/>
      <br/> <br/>


      <input  onChange={(e)=>setProduct({...product,"description": e.target.value})}  value={product.description} className="form-control"  placeholder="description" type="text"/>
      <br/> <br/>
      <input onChange={(e)=>setProduct({...product,"price": e.target.value})} value={product.price} className="form-control"  placeholder="price" type="text"/>
      <br/><br/>
      <button onClick={(e)=>updateProduct(e)} className="form-control btn btn-success">Update Product</button>
      </form>
      


    </div>
  )
}

export default withRouter(UpdateProduct);