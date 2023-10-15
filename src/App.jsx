
import { useLoaderData } from "react-router-dom"
import Coffeecrad from "./componets/Coffeecrad"
import { useState } from "react"



function App() {
 

 const loadeRcoffees=useLoaderData()

 const[coffees,setCoffees]=useState(loadeRcoffees)









  return (
    <>
    
  
    <p className="text-xl text-center font-bold">Coffee List</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-12">
     
      {
        coffees.map(coffee=><Coffeecrad coffee={coffee} setCoffees={setCoffees} coffees={coffees} key={coffee._id}></Coffeecrad>)
      }







    </div>

    
     
    </>
  )
  }

export default App
