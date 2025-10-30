const express =  require("express");
const app = express();

let port = 8080;


app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})


app.get("/", (req, res)=>{


    res.send("You contacted the root path");



})








//http://localhost:8080/search?q=shoaib

// app.get("/search", (req, res)=>{


//     let {q} =  req.query;


//    if(!q)
//    {

//         res.send("No query string received ");

//    }
    

//     res.send(`You searched for ${q}`);



// })



// Example-2 : Two Query strings 



app.get("/search", (req, res)=>{


    let {q, id} =  req.query;

    res.send(`You searched for the ${q} and ${id }`);
    


})