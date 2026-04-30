const express = require('express')
const app = express()
app.use(express.json())
const rotaProdutos = require('./rotas/rota_produtos')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/produtos', rotaProdutos)

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em: http://localhost:${PORTA}/produtos`);
    console.log(`Documentação: http://localhost:${PORTA}/api-docs`);
});

