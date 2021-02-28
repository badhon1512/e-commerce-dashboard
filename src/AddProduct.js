import Header from './Header';
import {useState} from 'react'


function AddProduct()
{

  

  const [productInfo,setProductInfo]=useState({name:"",picture:"",price:"",description:""})

  const [blankValue,setBlankValue]=useState({name:"",picture:"",price:"",description:""})


  
  
  async  function addProductHandle(){

    console.log(productInfo)
    
    let data={name:productInfo.name,picture:"pic",description:productInfo.description,price:productInfo.price};
    let check={name:"",picture:"",price:"",description:""}
    if(productInfo.name&&productInfo.picture&&productInfo.price&&productInfo.description)
    {




     let result= await fetch('http://localhost:8000/api/add',{
       
      method:'post',
      headers:{
        "Content-Type":"application/json",
        'Accept':"application/json"
       },
       body:JSON.stringify(data)

      })

      ///result=await result.json();
     // console.log('result',result);

     if(result.status===201)
     {
       alert("product added successfully");
       setProductInfo({name:"",picture:"",price:"",description:""})

     }
     else{
      alert("product added failure");
     }




        
    }

    else
    {

      if(productInfo.name==="")
      {
        check.name="please enter product name"
      }
      if(productInfo.picture==="")
      {
        check.picture="please enter product picture"
      }

      if(productInfo.price==="")
      {
        check.price="please enter product price"
      }
      if(productInfo.description==="")
      {
        check.description="please enter product description"
      }



      
    }

    setBlankValue(check)

  }

  
  return(
    <div> 
    <Header/>
    <div className='col-sm-6 offset-sm-4'>
      
      <h1>Add New Product</h1>
      <br/>
      <input type='text' value={productInfo.name} onChange={(e)=>{setProductInfo({...productInfo,name:e.target.value})}}className='form-control' placeholder="name" />
      {blankValue.name}
      <br/>
      <input type='file' onChange={(e)=>{setProductInfo({...productInfo,picture:e.target.files[0]})}} className='form-control' placeholder="file" />

      {blankValue.picture}
      <br/>
      <input type='text'  value={productInfo.price} onChange={(e)=>{setProductInfo({...productInfo,price:e.target.value})}} className='form-control' placeholder="price" />
      {blankValue.price}
      <br/>


      <input type='text' value={productInfo.description} onChange={(e)=>{setProductInfo({...productInfo,description:e.target.value})}} className='form-control' placeholder="discription" />
      {blankValue.description}
      <br/>

      <button onClick={addProductHandle} class="form-control btn btn-primary">Add</button>
    </div>
    </div>
  )
}

export default AddProduct;