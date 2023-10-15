import { useContext } from "react";
import { AuthContext } from "./Authprovider";


const Login = () => {
 
    const{userSingIn}=useContext(AuthContext)


 const loginHandler=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value
    console.log(email,password)
  userSingIn(email,password)
  .then((result)=>{
    console.log(result.user)

 const user={
    email,
    logedAt:result.user?.metadata?.lastSignInTime

 };

 

 fetch('http://localhost:5000/user' ,{
    method:'PATCH',
headers:{
    'content-type':'application/json'
},
body:JSON.stringify(user)
 })
 .then(res=>res.json())
 .then(data=>{
    console.log(data)
   
 })

 })
  .catch(error=>console.log(error))

 }











    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
  

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div className="">
    <p className="text-center text-xl font-bold">Login Now</p>
       </div>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       
      </form>
      




    </div>
  </div>
</div>
        </div>
    );
};

export default Login;