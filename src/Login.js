import Header from './Header'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login()
{
  let history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [checkBlank,setCheckBlank]=useState({email:"",password:""})

  async function LoginCheck()
  {
    
    let data={email,password};
    let check={email:"",password:""}
    if(data.email&&data.password){
      let result= await fetch("http://localhost:8000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(data)

      })
      result=await result.json();
     // console.warn(result[0]);
     if(result[0])
     {
      localStorage.setItem("user",JSON.stringify(result[0]));
      history.push('./productlist');
     }
     else
     {
      alert('please insert valid user');
     }
    }
    else
    {
      if(data.email==="")
      {
          check.email="please enter your email"
      }
      if(data.email==="")
      {
        check.password="please enter your password";
      }
    }

    setCheckBlank(check);
     // 
   
      

     // history.push('./add');
  }
  return(
    <>
   <Header/> 


<div className='col-sm-4 offset-sm-4'>
    <h1>Login</h1>

    <input onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder="email"  type='text'/>
    {checkBlank.email}<br/> <br/>
    <input onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder="password" type='password'/>
    {checkBlank.password}
    <br/> <br/>
    <button onClick={LoginCheck} className='btn btn-primary'>Login</button>
    </div>

    </>
  )
}

export default Login;