import {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Register()
{

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  let history=useHistory();

  async function signUp()
  {
    let user={name,email,password};
    let result= await fetch("http://localhost:8000/api/register",{

       method:"POST",
       headers:{
        "Content-Type":"application/json",
        'Accept':"application/json"
       },
       body:JSON.stringify(user)

    })

    result= await result.json();
    console.warn(result);

    localStorage.setItem("user",JSON.stringify(result));

    history.push('/add');
  }


  return(

   <div className="col-sm-6 offset-sm-3">
      
      <h1>Sign Up page</h1>
      <input type='text' className="form-control" onChange={(e)=>setName(e.target.value)} /> <br /> <br />
      <input type='text' onChange={(e)=>setEmail(e.target.value)} className="form-control"  /> <br /> <br />
      <input type='text' onChange={(e)=>setPassword(e.target.value)} className="form-control"  /> <br /> <br />

      <button onClick={signUp} className='btn btn-primary'>SIgn up</button>


    </div>
  )
}

export default Register;