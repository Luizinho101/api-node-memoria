const express = require('express')
const app = express()
app.use(express.json())

let usuarios = {};
let id = 1;

app.get('/usuarios', (req, res) => {
    res.json({msg: Object.values(usuarios)})
})

app.post('/usuarios', (req, res) => {
    const usuario = req.body
    const idUsuario = id;
    usuario.id = idUsuario;
    usuarios[idUsuario] = usuario;
    id += 1;
    res.json({msg: "Usuarios adicionado com sucesso!"})
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080 !");
} )


