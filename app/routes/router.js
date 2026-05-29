const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index", {
        "retorno": null,
        "valores": { "dia": "" }
    });
});

router.post("/classificar", (req, res) => {

    // recuperar o dia
    let dia = parseInt(req.body.dia);

    // VALIDAÇÃO
    if (isNaN(dia) || dia < 1 || dia > 7) {

        return res.render("pages/index", {
            "retorno": {
                "erro": "Digite um número entre 1 e 7"
            },
            "valores": {
                "dia": req.body.dia
            }
        });
    }

    // classificação
    let semana = "";

    if (dia == 1) {
        semana = "Domingo";

    } else if (dia == 2) {
        semana = "Segunda";

    } else if (dia == 3) {
        semana = "Terça";

    } else if (dia == 4) {
        semana = "Quarta";

    } else if (dia == 5) {
        semana = "Quinta";

    } else if (dia == 6) {
        semana = "Sexta";

    } else if (dia == 7) {
        semana = "Sábado";
    }

    // formatação
    let objJson = {
        "semana": semana
    };

    // envio dos dados
    res.render("pages/index", {
        "retorno": objJson,
        "valores": {
            "dia": req.body.dia
        }
    });

});

module.exports = router;
