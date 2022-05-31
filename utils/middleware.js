const consoleData = (req, res, next) => {
    console.log("Method: " +req.method);
    console.log("Path: " +req.path);
    console.log("Body: " ,req.body);
    console.log("-------");
    next()
};

const unkownEndpoint = (req,res) => {
    res.status(404).send({error:"unkown endpoint"});
};

module.exports={consoleData, unkownEndpoint};