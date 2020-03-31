const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['son','goku','esto-se-usa-para-firmar-la-cookie-mismas']
}));

app.get("/",function(req,res){
    req.session.visits = req.session.visits || 0;
    req.session.visits = req.session.visits + 1;
    
    res.send(`Cantidad de visitas: ${req.session.visits}`); 
})

app.listen(4000);