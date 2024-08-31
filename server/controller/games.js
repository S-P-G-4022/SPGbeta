const axios = require('axios');
const prisma = require("../db/prisma.js")


// Fetch the list of all games
async function fetchAllGames() {
    const response = await axios.get('steamspy.com/api.php?request=all');
    return response.data;
}

// Fetch detailed information for a specific game
async function fetchGameDetails(appid) {
    const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
    return response.data[appid].data;
}





const oneGame = async (req,res)=>{
    
    try{
        const {id} = req.params

        const game = await prisma.Game.findUnique({
            where :{
                id : parseInt(id)
            }
        })
       res.status(200).send(game)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}


const fetchGames = async (req,res) => {
    console.log(req.body,"ahahahahahahahahahah")
    const {names} =req.body
    try {
       
  const games =  await prisma.Game.findMany({
    where: {
        names :{
            contains : names
        }
        
      },
  })
  res.status(200).send(games)
    }catch(error){
        console.log(error)
        res.status(401).send(error)
    }
}

module.exports={

fetchGameDetails,
fetchAllGames,
fetchGames,
oneGame
}

