const express = require("express");
const app = express();

app.use('/assets', express.static("assets",{
    etag: false,
    maxAge: '5h'
}));

app.set("view engine","ejs");

app.get('/html',function(req,res){
    res.sendFile('index.html',{
        root : __dirname
    });
});

app.get('/view',function(req,res){
    res.render("index");
});

app.listen(4000);