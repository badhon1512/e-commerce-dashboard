
import Header from './Header';

function AddProduct()
{


  return(
    <> 
    <Header/>
    <div className='col-sm-6 offset-sm-4'>
      
      <h1>Add New Product</h1>
      <input type='text' className='form-control' />
      <input type='text' className='form-control' />
      <input type='text' className='form-control' />
      <input type='text' className='form-control' />
      <input type='text' className='form-control' />
    </div>
    </>
  )
}

export default AddProduct;