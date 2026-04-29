const express = require('express')
const router = express.Router();
const validarProduto = require('../middlewares/validar_produto');



let produtos = {};
let id = 1;

router.get('/', (req, res) => {
    res.json({Produtos: Object.values(produtos)})
})

router.get('/:id', (req, res) => {
    res.json({Produto: produtos[req.params.id]})
})


router.post('/', validarProduto ,  (req, res) => {
    const produto = req.body
    const idProduto = id;

    produto.id = idProduto;
    produtos[idProduto] = produto;
    id += 1;
    res.json({Produto: "Produto adicionado com sucesso!"})
})

router.put('/:id', validarProduto , (req, res) => {
    const id = Number(req.params.id); 
    const novoConteudo = req.body;

    if (produtos[id]) {
     
        produtos[id] = novoConteudo
        
        res.status(200).json({ 
            msg: "Produto atualizado com sucesso", 
            dados: produtos[id] 
        });
    } else {
        res.status(404).json({ 
            msg: `Erro: Produto com ID ${id} não encontrado.` 
        });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    if (produtos[id]) {
        delete produtos[id];
        res.json({ msg: "Produto removido com sucesso!" });
    } else {
        res.status(404).json({ msg: "Produto não encontrado." });
    }
});


module.exports = router