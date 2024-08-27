const express = require('express')
const cors = require("cors");
const app = express()
const port = 3001




const gamesRouter = require("./Router/games.js")
const userRouter = require("./Router/User.js")

app.use(cors())

app.use(express.json());






app.use("/api/games",gamesRouter)
app.use("/api/user",userRouter)



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })