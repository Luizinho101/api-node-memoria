const express = require('express')
const router = express.Router();



let produtos = {};
let id = 1;

router.get('/', (req, res) => {
    res.json({Produtos: Object.values(produtos)})
})

router.get('/:id', (req, res) => {
    res.json({Produto: produtos[req.params.id]})
})


router.post('/', (req, res) => {
    const produto = req.body
    const idProduto = id;

    produto.id = idProduto;
    produtos[idProduto] = produto;
    id += 1;
    res.json({Produto: "Produto adicionado com sucesso!"})
})


module.exports = router