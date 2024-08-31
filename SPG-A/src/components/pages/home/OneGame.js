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
   setGame(data)
    }catch(error){
      console.log(error)
    }
  }
  return (
    
    <div className="bg-orange-700 text-white min-h-screen p-8">
    {/* Breadcrumb Navigation */}
    <div className="text-sm text-gray-300 mb-6">
      <a href="#" className="hover:underline">Store</a> &gt; 
      <a href="#" className="hover:underline"> Categories</a> &gt; 
      <a href="#" className="hover:underline"> Games</a> &gt; 
      <a href="#" className="hover:underline"> Steam Games</a>
    </div>

    {/* Main Content */}
    <div className="flex justify-between">
      {/* Left Section: Game Details */}
      <div className="flex-1">
        <div className="flex">
          <img 
            src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" 
            alt="Black Myth: Wukong" 
            className="w-1/3 rounded-lg"
          />
          <div className="ml-6">
            <h2 className="text-4xl font-bold">Black Myth: Wukong (PC) Steam Key CHINA</h2>
            <div className="flex items-center mt-4">
              <div className="flex items-center text-xl mr-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2">4.00 / 5 from 7 ratings</span>
              </div>
              <p className="text-green-400 text-lg">2 people watching this product</p>
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

        {/* Gallery */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
          <div className="flex space-x-4">
            <img src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" alt="Screenshot 1" className="w-48 h-32 rounded-lg" />
            <img src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" alt="Screenshot 2" className="w-48 h-32 rounded-lg" />
            <img src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" alt="Screenshot 3" className="w-48 h-32 rounded-lg" />
            <img src="https://cdn.mos.cms.futurecdn.net/FCY9PcBrhN3pfoNV7FfFTQ-650-80.jpg.webp" alt="Screenshot 4" className="w-48 h-32 rounded-lg" />
          </div>
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
          <div className="mt-4 text-3xl font-bold">€62.99</div>
          <p className="text-sm text-gray-400">Price is not final</p>
          <button className="mt-4 w-full bg-yellow-400 text-purple-800 font-bold py-2 rounded-lg hover:bg-yellow-300">Buy now</button>
          <button className="mt-2 w-full bg-yellow-400 border  text-purple-800 border-purple-800 text--800 font-bold py-2 rounded-lg hover:bg-yellow-300">Add to cart</button>
        </div>
        <p className="mt-6 text-yellow-400 text-sm hover:underline cursor-pointer">+2 offers from €35.89</p>
        <div className="mt-8 p-4 bg-black rounded-lg">
          <h3 className="text-lg font-bold">Looking for good deals?</h3>
          <p className="text-sm text-gray-300 mt-2">Get them delivered to your inbox</p>
          <button className="mt-4 w-full bg-yellow-400 text-purple-800 font-bold py-2 rounded-lg hover:bg-yellow-300">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OneGame