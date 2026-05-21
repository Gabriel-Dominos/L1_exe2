const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index",{"retorno":null,"valores":{"dia":""}});
});


router.post("/classificar", (req, res)=>{

    //recuperar a idade do nadador
    let dia = parseInt(req.body.dia);

    //manipular os dados -> classificar
    if(dia == 1 ){
        var semana = "Domingo";
    }else if(dia == 2  ){
        var semana = "Segunda";
    }else if(dia == 3  ){
        var semana = "Terça";
    }else if(dia == 4  ){
        var semana = "Quarta";
    }else if(dia == 5 ){
        var semana = "Quinta";
        }else if(dia == 6 ){
        var semana = "Sexta";}
        else if(dia == 7 ){
        var semana = "Sábado";
    }else{
        var semana = "Dia da semana não classificado";
    }

    //formatação 
    let objJson = {"semana":semana};

    //envio dos dados para mescalr com o HTML
    res.render("pages/index",{"retorno":objJson,"valores":{"idade":req.body.idade}})

});


module.exports = router;