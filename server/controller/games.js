const axios = require('axios');



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




module.exports={

fetchGameDetails,
fetchAllGames,
}

