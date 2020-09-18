function lowercase(texto) {
  return texto.toLowerCase();
}

function uppcase(texto) {
  return texto.toUpperCase();
}

const express = require("express");
const app = express();
app.use(express.json());

app.post("/lowercase", (req, res) => {
  const { input } = req.body;
  const resultado = {
    action: "lowercase",
    input,
    output: lowercase(input)
  };
  res.json(resultado);
});

app.post("/uppcase", (req, res) => {
  const { input } = req.body;
  const resultado = {
    action: "uppcase",
    input,
    output: uppcase(input)
  };
  res.json(resultado);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
