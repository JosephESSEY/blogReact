const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const db = require("./models");

const postRouter = require("./routes/Posts");
app.use("/posts",postRouter);


db.sequelize.sync().then(() =>{
    app.listen(3001, ()=>{
        console.log("Serveur est en exécution sur le port 3001")
    })
})

