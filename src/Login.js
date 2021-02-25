import Header from './Header'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login()
{
  let history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function LoginCheck()
  {
    let data={email,password};
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
      history.push('./add');
     }
     else
     {
      alert('please insert valid user');
     }
     // 
   
      

     // history.push('./add');
  }
  return(
    <>
   <Header/> 


<div className='col-sm-4 offset-sm-4'>
    <h1>Login</h1>

    <input onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder="email"  type='text'/><br/> <br/>
    <input onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder="password" type='text'/><br/> <br/>
    <button onClick={LoginCheck} className='btn btn-primary'>Login</button>
    </div>

    </>
  )
}

export default Login;