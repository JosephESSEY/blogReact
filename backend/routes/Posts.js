const express = require('express');
const router = express.Router();

const {Posts} = require("../models");


router.get("/", async(request, response) =>{
    const listOfPosts = await Posts.findAll();
    response.json(listOfPosts);
})


router.post("/", async(request, response) =>{
    const post = req.body;
    await Posts.create(post);
    response.json(post);
})




module.exports = router;