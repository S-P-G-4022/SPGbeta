const axios = require('axios');

const STEAM_API_KEY = 'YOUR_STEAM_API_KEY';

// Fetch the list of all games
async function fetchAllGames() {
    const response = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
    return response.data.applist.apps;
}

// Fetch detailed information for a specific game
async function fetchGameDetails(appid) {
    const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
    return response.data[appid].data;
}

// Fetch games by genre
async function fetchGamesByGenre(targetGenre) {
    const allGames = await fetchAllGames();
    const gamesByGenre = [];

    for (const game of allGames) {
        const details = await fetchGameDetails(game.appid);

        if (details && details.genres) {
            const genres = details.genres.map(g => g.description);

            if (genres.includes(targetGenre)) {
                gamesByGenre.push(details);
            }
        }
    }

    return gamesByGenre;
}

// Example usage
fetchGamesByGenre('Action').then(games => {
    console.log(games); // Display action games
});