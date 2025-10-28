const express =  require("express");
const app = express();

let port = 8080;


app.listen(port, ()=>{


    console.log(`The server is listening at port ${port}`);

})


app.use((req, res)=>{

    console.log("Request Received ");


    // 1. sending the basics response 
    
    res.send("This is the basics Response ");



    // 2. sending the object as a response 


    res.send({


        name : "My name is Shoaib",
        rollNo : 200147


    })




    // 3, Sending the Html code as a response 





    let code =  ` <h1>Hello, This is an HTML Response </h1>  
    
                  <ul>   
    
                        <li>Apple </li>   
                        <li>Orange </li> 
                        <li>Mango</li>  
    
    
                 </ul> `;


    res.send(code);






})

