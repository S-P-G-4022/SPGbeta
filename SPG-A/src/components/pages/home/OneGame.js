import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
function OneGame() {

  
    const { state } = useLocation()
    const id = state
    const [game,setGame]=useState("")
    
    useEffect(()=>{
      fetchgame()
    })

    const fetchgame= async()=>{
        try{
   const {data} = await axios.get(`http://localhost:3001/api/games/oneGame/${id}`)
   console.log(data)
   if(data){
    setGame(data)
   }
   
    }catch(error){
      console.log(error)
    }
  }
  return (
    
    <div className="bg-orange-700 text-white min-h-screen p-8">
   
    {/* Main Content */}
    <div className="flex justify-between">
      {/* Left Section: Game Details */}
      <div className="flex-1">
        <div className="flex">
          <img 
            src={game?.image} 
            alt="Black Myth: Wukong" 
            className="w-1/3 rounded-lg"
          />
          <div className="ml-6">
            <h2 className="text-4xl font-bold">{game?.names} (PC) Steam Key </h2>
            <div className="flex items-center mt-4">
            
            
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-6 text-sm">
              <div className="flex items-center">
                <span className="text-4xl mr-2">🚫</span>
                <div>
                  <p className="font-semibold">China</p>
                  <p>Can't be activated in China</p>
                  <a href="#" className="text-blue-400 underline">Check region restrictions</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-2">💻</span>
                <div>
                  <p className="font-semibold">Steam</p>
                  <p>Activate/redeem on Steam</p>
                  <a href="#" className="text-blue-400 underline">Check activation guide</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-2">🔑</span>
                <div>
                  <p className="font-semibold">Digital key</p>
                  <p>This is a digital edition of the product (CD-KEY)</p>
                  <p className="text-green-400">Instant delivery</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg">Works on: <span className="font-semibold">Windows</span></p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
        Gallery
        <div className="flex flex-row mt-8 space-x-4">
  {game.descriptionImage?.map((e, i) => (
    <div key={i}>
      <img src={e} alt={`Screenshot ${i + 1}`} className="w-48 h-32 rounded-lg" />
    </div>
  ))}
</div>

      
      </div>

      {/* Right Section: Purchase Options */}
      <div className="w-96 bg-black p-6 rounded-lg">
        <div className="text-right">
          <button className="text-lg font-semibold hover:underline">Share</button>
        </div>
        <div className="mt-4 p-4 bg-black rounded-lg">
          <h3 className="text-lg font-bold text-yellow-400">PROMOTED OFFER</h3>
          <p className="text-sm text-gray-300 mt-2">Past <span className="text-yellow-400">⭐ 9.79 Superb rating</span></p>
          <div className="mt-4 text-3xl font-bold">${game?.price}</div>
          <p className="text-sm text-gray-400">Price is not final</p>
          <button className="mt-4 w-full bg-yellow-400 text-purple-800 font-bold py-2 rounded-lg hover:bg-yellow-300">Buy now</button>
          <button className="mt-2 w-full bg-yellow-400 border  text-purple-800 border-purple-800 text--800 font-bold py-2 rounded-lg hover:bg-yellow-300">Add to cart</button>
        </div>
        <div className="mt-8 p-4 bg-black rounded-lg">
        
      
        </div>
      </div>
    </div>
  </div>
  )
}

export default OneGame