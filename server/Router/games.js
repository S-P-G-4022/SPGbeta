const express = require('express');
const router = express.Router();

const {fetchAllGames,fetchGameDetails,fetchGames,oneGame}=require("../controller/games.js")

router.post("/allGames",fetchGames)
router.get("/oneGame/:id",oneGame)
router.get("/oneGameDetail",fetchGameDetails,)


module.exports = router