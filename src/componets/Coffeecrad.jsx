import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffeecrad = ({coffee,setCoffees,coffees}) => {
 const{_id, name,supply,details,quantity,taste,photoUrl,category}=coffee;


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
  }).then((result) => {
    if (result.isConfirmed) {
    

      fetch(`http://localhost:5000/coffee/${_id}`,{
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
            const remaing=coffees.filter(cof=>cof._id !==_id)
            setCoffees(remaing)
        }
      })














    }
  })








 }


















     
    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px]" src={photoUrl} alt="Movie"/></figure>
  <div className="flex items-center justify-between w-full">
    <div className="">
    <h2 className="text-lg font-bold">Name:{name}</h2>
    <p className="text-lg font-bold" >Quantity:{quantity}</p>
    <p className="text-lg font-bold" >Taste:{taste}</p>
    </div>
    <div className="btn-group btn-group-vertical space-y-2">
  <button className="btn bg-purple-500">Details</button>
  <Link to={`/updatecoffee/${_id}`} className="btn">Edit</Link>
  <button onClick={()=>deleteHandler(_id)} className="btn">Delete</button>
</div>








  </div>
</div>




        </div>
    );
};

export default Coffeecrad;