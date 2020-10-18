const express = require('express');
 

const app = express();


app.get('/',(request,response)=>{
    response.status(200);
    response.send('hello express')
    response.end() 
})


app.get('/rest',(request,response)=>{
    response.json({
        result:1,
        msg:'Return msg'        
    });
 
})


// http://localhost:5000/rest

// apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(5000);