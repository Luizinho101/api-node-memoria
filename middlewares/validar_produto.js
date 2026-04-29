const Ajv = require("ajv");
const ajv = new Ajv();
const produtoSchema = require('../Schemas/schemas_produtos');

const validar = ajv.compile(produtoSchema);

function validarProduto(req, res, next) {
    const isValido = validar(req.body);

    if (isValido) {
        next(); 
    } else {
        res.status(400).json({
            msg: "Dados do produto inválidos",
            erros: validar.errors.map(erro => ({
                campo: erro.instancePath.replace('/', ''),
                mensagem: erro.message
            }))
        });
    }
}

module.exports = validarProduto;