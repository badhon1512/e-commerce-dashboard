import Header from './Header';


const Profile=()=>{

  const user=JSON.parse(localStorage.getItem('user'));

  return(
    
    <div>
      <Header/>
      <h3 style={{marginTop:"200px"}}><label>Name :    {user.name}</label></h3>

      <h3><label>EMail :    {user.email}</label></h3>


    </div>
     
   

  )
}


export default Profile;