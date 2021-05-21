const express = require("express");  //importando o express
const app = express(); //  Iniciando o express e  passando pra var app


app.get("/",function(req,res){
 res.send("Bem vindo ao guia do programador iniciante");
});
app.get("/rickroll",function(req,res){
res.send("<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Iphone gratis aq</a>")
});

app.get("/a", function(req,res){
   res.send( "<h1>aaaae</h1>")
   
})
app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro");

            }else{
    console.log("servidor iniciado com sucesso")
        }
})


