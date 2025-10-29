const express =  require("express");
const app = express();

let port = 8080;


app.listen(port, (req, res)=>{

    
    console.log(`The server is listening on the port ${port}`);



})


app.get("/", (req, res)=>{

    res.send("you contacted the root path");

})


app.get("/:username/:id", (req, res)=>{

    let username =  req.params.username;
    let id =  req.params.id;


    let htmlStr =  ` <h1>Hello Mr. ${username}  your id is ${id}  </h1>  `;

    res.send(htmlStr);



})