const express = require("express");
const app =  express();

let port =  8080;


app.listen(port, ()=>{


    console.log(`The app is listening at port ${port}`);

})



app.get("/", (req, res)=>{


    console.log("Request Received");
    res.send("Hello, you contacted the root path");


})


app.get("/about", (req, res)=>{

    res.send("You contacted the about path");

})


app.get("/search", (req, res)=>{

    res.send("You contacted the search path");


})


app.use((req, res) => {
    res.status(404).send("The page does not exist");
});
