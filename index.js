const express = require('express')
const app = express()
app.use(express.json())
const rotaProdutos = require('./rotas/rota_produtos')


app.use('/produtos', rotaProdutos)



app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 !");
} )


