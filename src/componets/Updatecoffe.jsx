import { useLoaderData } from "react-router-dom";


const Updatecoffe = () => {

 const coffee=useLoaderData()
 const{_id, name,supply,details,quantity,taste,photoUrl,category}=coffee;






 const updateHandler=event=>{
    event.preventDefault();
   
    const  form=event.target;

    const name=form.name.value;

    const quantity=form.quantity.value;

    const taste=form.taste.value;

    const category=form.category.value;

    const supply=form.supply.value;

   const photoUrl=form.photo.value;

   const details=form.details.value;

   const updatedCoffee={name,quantity,taste,category,details,supply,photoUrl}

 console.log(updatedCoffee)

  fetch(`http://localhost:5000/coffee${_id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatedCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)

  })





















 }












    return (
        <div className="bg-orange-300 p-24">
               <p className="text-center text-xl my-5">update Coffee</p>
            <form onSubmit={updateHandler}>
         


           <div className="flex justify-center gap-7">
   <div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="enter coffee name" name="name" defaultValue={name} className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Avaialbe Qauntity</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity" name="quantity" defaultValue={quantity} className="input input-bordered" />
  </label>
</div>
</div>




     {/* seceond row */}
            
           <div className="flex justify-center gap-7">
   <div className="form-control">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="taste" name="taste" defaultValue={taste} className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity" name="supply" defaultValue={supply} className="input input-bordered" />
  </label>
</div>
</div>


      {/* third row */}




            
      <div className="flex justify-center gap-7">
   <div className="form-control">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="enter coffee name" name="category" defaultValue={category} className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity"  name="details" defaultValue={details} className="input input-bordered" />
  </label>
</div>
</div>

                      {/* fourth row */}


            
                      <div className="flex justify-center">
   <div className="form-control">
  <label className="label">
    <span className="label-text">Photo Url</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="enter coffee name" name="photo" defaultValue={photoUrl} className="input input-bordered" />
  </label>
</div>



</div>





 <div className="text-center my-5">
    <input value='Update Coffee' className="btn btn-secondary" type="submit"/>
 </div>






            </form>
        </div>
    );
};






















export default Updatecoffe;