const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("Oi pessoal;");
});

/**QUERY PARAMS*/
app.get("/ola", (req,res)=>{
    const nome = req.query.nome;
    res.send(`ola,${nome}`);
})

/**ROUTE PARAMS*/
app.get("/calculadora/:numero1/:numero2/:operacao", (req,res)=>{
    const numero1 = parseInt(req.params.numero1);
    const numero2 = parseInt(req.params.numero2);
    const operacao = req.params.operacao;
    if (operacao === "soma"){
        res.send('resultado =' + (numero1 + numero2));
    } else if(operacao === "subtracao"){
        res.send('resultado = ' + (numero1 - numero2));
    };

});


/**BODY PARAM */
app.post("/cadastro", (req,res)=>{
    const {nome, idade} = req.body;
    res.send(`ola ${nome}, Voce tem ${idade}`);
    const resultado = {
        nome: nome,
        idade: idade
    };
    res.json(resultado);
});




app.listen(8080,()=>{
    console.log("Tudo OK! Servidor rodando na porta 8080");
});