import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header';



function Register()
{


  const [name,setName]=useState("");
  const [inform,setInform]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [checkBlank,setCheckBlank]=useState({name:'',email:'',password:''})
  let history=useHistory();

  async function signUp()
  {
    let user={name,email,password};
    let check={name:'',email:'',password:''}


    if(user.name&&user.email&&user.password)
    {
    let result= await fetch("http://localhost:8000/api/register",{

       method:"POST",
       headers:{
        "Content-Type":"application/json",
        'Accept':"application/json"
       },
       body:JSON.stringify(user)

    })

    result= await result.json();
    

    //localStorage.setItem("user",JSON.stringify(result));
    setEmail("");
    setName("");
    setPassword("");
    setInform("Registered successfully");
    

   // history.push('/login');
  }

  else
  {
   
   /// const [checkBlank,setCheckBlank]=useState({name:'',email:'',password:''})

   

    if(user.name==='')
    {
      check.name="please enter your name"

      
    }
    if(user.email==='')
    {
      check.email="please enter your email"

      
    }
    if(user.password==='')
    {
      check.password="please enter your password"

      
    }




    setCheckBlank(check)

  }

  console.warn(checkBlank)
  console.warn(check)
  }


  return(
    <>

    <Header/>


   <div className="col-sm-6 offset-sm-3">
      
      <h1>Sign Up page</h1>
      {inform}
      <input placeholder="name" type='text' className="form-control" onChange={(e)=>setName(e.target.value)} /> 
      {checkBlank.name}
      <br />
       <br />
      <input type='text' placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"  />
      {checkBlank.email}
       <br /> <br />
      <input type='text' placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"  /> 

      {checkBlank.password}
      <br /> <br />

      <button onClick={signUp} className='btn btn-primary'>SIgn up</button>


    </div>
    </>
  )
}

export default Register;