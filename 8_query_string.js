// Example-2 : Two Query strings 


const express =  require("express");
const app = express();


app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})



app.get("/search", (req, res)=>{


    let {q, id} =  req.query;

    res.send(`You searched for the ${q} and ${id }`);
    


})