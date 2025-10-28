const express =  require("express");
const app = express();

let port = 8080;


app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})


app.use((req, res)=>{

    console.log("Request Received ");



})