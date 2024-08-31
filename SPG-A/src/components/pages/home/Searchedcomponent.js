import React, { useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
function Searchedcomponent() {
  const { state } = useLocation()
  const games = state

 const navigate=useNavigate()
  return (

  <div className=' bg-gray-600 min-h-screen'>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
      {games?.map((game, index) => (
        <div  onClick={()=>{
      navigate("/onegame",{state:game.id})
        }} key={index} className="p-4 bg-white  shadow-md rounded-lg">
          <img
          
            src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" 
            alt={game?.name}
           className='h-[400px] w-[400px]'
      
            
          />
          <h3 className="text-xl font-semibold mt-4">{game?.names}</h3>
          <p className="text-black">{game?.publisher}</p>
        <div className='flex flexx-row'>
          <div className='flex flex-row'> 
             <img className='w-4'
          src='https://img.icons8.com/?size=100&id=83166&format=png&color=40C057'
          ></img><p className="text-black">{game?.positiveReviews} </p>
          </div>  
          <div className='flex flex-row'>  <img className='w-4'
          src='https://img.icons8.com/?size=100&id=60712&format=png&color=FA5252'
          ></img><p className="text-black">{game?.negativeReviews} </p>
          <div/>
          </div>  </div>
          
                  
          <p className="text-black">${game?.price} </p>
          <p className="text-black">Publisher:{game?.publisher} </p>
        </div>
      ))}
    </div>
    </div>)
    
}

export default Searchedcomponent