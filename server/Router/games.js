const express = require('express');
const router = express.Router();

const {fetchAllGames,fetchGameDetails}=require("../controller/games.js")

router.get("/allGames",fetchAllGames)
router.get("/oneGameDetail",fetchGameDetails,)


module.exports = router