const Ajv = require("ajv");
const ajv = new Ajv(); 

const produtoSchema = {
  type: "object",
  properties: {
    nome: { type: "string", minLength: 3 },
    descricao: { type: "string" },
    preco: { type: "number", minimum: 0 }
  },
  required: ["nome", "preco"],
  additionalProperties: false 
};

module.exports = produtoSchema;