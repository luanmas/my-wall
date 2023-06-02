const express = require("express");
const router = express.Router();
const posts = require("../model/post.js");
const cors = require("cors");

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

router.get("/all" , (req , res) => {
    res.json(JSON.stringify(posts.getAll()))    
})

router.post("/new" , express.json() , (req , res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title , description);

    res.send("Um novo post foi adicionado");
})

router.delete("/del" , express.json() , (req , res) => {
    let postID = req.body.id;
    posts.deletePost(postID);
    res.send("post deletado com sucesso");
})

module.exports = router;
