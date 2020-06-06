const express = require("express");
const routes = require('./routes');
const app = express();

//Adicionado as 2 linhas abaixo para corrigir erro de cors protegido nas rotas
const cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(routes);
app.listen(3333);

