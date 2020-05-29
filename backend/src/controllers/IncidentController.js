const connection = require('../database/conection')
module.exports = {
    //Listagem de Incidents
    async listagem (request,response){
        const incidents = await connection('incidents').select('*');
        return response.json({ incidents })
    },

    async create(request, response){
        const {title, description, value} = request.body;

        //buscando id da ong
        const ong_id = request.headers.autorization;

        //Inserindo dados na tabela    
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        
        //Buscar id da ong
        const ong_id = request.headers.autorization;

        //Query para buscar dentro do BD
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first()

        // Verificando se o id da ong e diferente do id do incident
        // cadastado
        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operação não permitida.'})
        }

        await connection('incidents').where('id',id).delete();
        return response.status(204).send()
    }
}