const express = require('express')
const app = express()
app.use(express.json())

let produtos = {};
let id = 1;

app.get('/produtos', (req, res) => {
    res.json({msg: Object.values(produtos)})
})

app.get('/produtos/:id', (req, res) => {
    res.json({msg: produtos[req.params.id]})
})


app.post('/produtos', (req, res) => {
    const produto = req.body
    const idProduto = id;
    produto.id = idProduto;
    produtos[idProduto] = produto;
    id += 1;
    res.json({msg: "Produto adicionado com sucesso!"})
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 !");
} )


