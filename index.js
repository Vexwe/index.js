const express = require("express");  //importando o express
const app = express(); //  Iniciando o express e  passando pra var app

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro");

            }else{
    console.log("servidor iniciado com sucesso")
        }
})


