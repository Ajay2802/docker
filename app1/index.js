const express = require('express');

const app= express();

const port = 3001;

app.get("/health",(req,res)=>{
    res.send(`app1 is healthy`);
});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});