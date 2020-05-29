const express = require('express');
const routes = express.Router();
//Importando controller
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const SessionController = require('./controllers/SessionController')

//Sessao Login
routes.post('/session',SessionController.create)

//Lisando todas ongs
routes.get('/ong', OngController.listagem);
//Criando Ongs
routes.post('/ong', OngController.create);

//Listando Incidente
routes.get('/incidents',IncidentController.listagem);
//Criando Incidente
routes.post('/incidents', IncidentController.create);
//Deletando Incidente
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes;


// routes.post('/users', (request, response)=>{
//     /**
//       * Query Params: Parametros nomeados enviados na rota após "/"(Filtros, Paginação)
//       * Route Params: Parametros utilizados para identificar recursos
//       * Request body: Corpo da requisição, utiizado para criar ou alterar recursos
//       */
//        //const params = request.query;
//         //const params = request.params;
//         const body = request.body;
    
//         console.log(body)
    
//     return response.json({
//         event:"tudo ok",
//         aluno:'Filipe'
//     })
//     })

