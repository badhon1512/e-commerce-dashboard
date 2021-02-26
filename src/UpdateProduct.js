
import Header from './Header';

import {withRouter} from 'react-router-dom'

function UpdateProduct(props)
{

  console.log(props.match.params.id)

  const updateHandle=(e)=>{
    e.preventDefault();

    
  }


  return(
    <div>
      <Header/>
      <h1>Update Product</h1>


<form className="col-sm-4  offset-4">
      <input className="form-control" placeholder="id" type="text"/>
      <br/> <br/>
      <input className="form-control"  placeholder="name" type="text"/>
      <br/> <br/>
      <input className="form-control"  placeholder="picture" type="file"/>
      <br/> <br/>
      <input className="form-control"  placeholder="description" type="text"/>
      <br/> <br/>
      <input className="form-control"  placeholder="price" type="text"/>
      <br/><br/>
      <button onClick={updateHandle} className="form-control btn btn-success">Update Product</button>
      </form>
      


    </div>
  )
}

export default withRouter(UpdateProduct);