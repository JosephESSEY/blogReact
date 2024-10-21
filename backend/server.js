const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const db = require("./models");


db.sequelize.sync().then(() =>{
    app.listen(8001, ()=>{
        console.log("Serveur est en exécution")
    })
})

