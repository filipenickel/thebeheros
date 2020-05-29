const connection = require('../database/conection')
module.exports = {
    //Listagem de Incidents
    async listagem (request,response){
        //Contador total de incidentes
        const [count] = await connection('incidents').count()
        //console.log(count)


        //Adicionando listagem por paginas .limit(5) .offset((page - 1) * 5)
        const {page = 1} = request.query;
        const incidents = await connection('incidents')
        .join('ongs','ong_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);

        //Adicionando o valor total de incidentes ao header
        response.header('X-Total-Count', count['count(*)'])

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