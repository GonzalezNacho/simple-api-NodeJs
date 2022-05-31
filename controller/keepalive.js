const router = require("express").Router();


router.get("/", (req,res)=> {
    res.status(200).json({message: "estoy vivo por el get"});
});


router.post("/", (req,res)=> {
    res.status(200).json({message: "estoy vivo por el post"});
});

module.exports = router;