import { data } from "autoprefixer";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const User = () => {

    const loaderusers=useLoaderData()

   const[users,setUsers]=useState(loaderusers)




const deleteHandler=_id=>{
 
    console.log(_id)

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      .then((result) => {
        if (result.isConfirmed) {
      fetch(`http://localhost:5000/user/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                            'Deleted!',
                         'Your file has been deleted.',
                             'success'
                         )

                 const remaing= users.filter(use=>use._id!==_id)

                    setUsers(remaing)


                        }
        
            
        
        
            })


     



      }
    })
}
    
    
    
   return (
        <div>
            <p className="text-center text-xl font-bold my-6">Total Users:{users.length}</p>


          <div className="">

          <div className="overflow-x-auto p-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>Id</th>
        <th>E-mail</th>
        <th>Sing Up At</th>
        <th>Loged At</th>
        <th>Manage Users</th>
        
      </tr>
    </thead>
    <tbody>
    {

     users.map(user=><tr key={user._id} className="bg-base-200">
     <th>{user._id}</th>
     <td>{user.email}</td>
     <td>{user.logingTime}</td>
     <td>{user.lastLoggedAt}</td>
     <td>
        <button onClick={()=>deleteHandler(user._id)} className="btn btn-warning">X</button>
     </td>

    
   </tr>)





    }
      
     
    </tbody>
  </table>
</div>










          </div>










        </div>
    );
};

export default User;