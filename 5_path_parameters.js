const  express =  require("express");
const  app  =  express();

let port  = 8080;


app.listen(port, ()=>{


    console.log(`The server is listening at port ${port}`);

})


app.get("/", (req, res)=>{


    res.send("You contacted the root path");

})




app.get("/:username", (req, res)=>{



    // ye req.params ek object hai jiske andar saare variables as a key value pair store hota hain 
    console.log(req.params);


    let username =  req.params.username;


    res.send(`Hello Mr. ${username}`);

})