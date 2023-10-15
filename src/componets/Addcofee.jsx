

const Addcofee = () => {





 const AddHandler=event=>{
    event.preventDefault();
   
    const  form=event.target;

    const name=form.name.value;

    const quantity=form.quantity.value;

    const taste=form.taste.value;

    const category=form.category.value;

    const supply=form.supply.value;

   const photoUrl=form.photo.value;

   const details=form.details.value;

   const newCoffee={name,quantity,taste,category,details,supply,photoUrl}

 console.log(newCoffee)

  fetch('http://localhost:5000/coffee',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.insertedId){
        alert('coffee added')
    }

  })





















 }












    return (
        <div className="bg-orange-300 p-24">
               <p className="text-center text-xl my-5">Add A Coffee</p>
            <form onSubmit={AddHandler}>
         


           <div className="flex justify-center gap-7">
   <div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="enter coffee name" name="name" className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Avaialbe Qauntity</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity" name="quantity" className="input input-bordered" />
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
  
    <input type="text" placeholder="taste" name="taste" className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity" name="supply" className="input input-bordered" />
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
  
    <input type="text" placeholder="enter coffee name" name="category" className="input input-bordered" />
  </label>
</div>




         

<div className="form-control">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Avaiable Quantity"  name="details" className="input input-bordered" />
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
  
    <input type="text" placeholder="enter coffee name" name="photo" className="input input-bordered" />
  </label>
</div>



</div>





 <div className="text-center my-5">
    <input value='Add Coffee' className="btn btn-secondary" type="submit"/>
 </div>






            </form>
        </div>
    );
};

export default Addcofee;