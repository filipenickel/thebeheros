//Conexao com BD
const connection = require('../database/conection')

//Pacote crypto gerar ID(criptografado) ong unico
const crypto = require('crypto');

//Listagem de ongs
module.exports = {
    async listagem (request,response){
        const ongs = await connection('ongs').select('*');
        return response.json({ ongs })
    },

    //Criação de Ongs
    async create(request,response){
        const {name, email, whatsapp, city, uf} = request.body;   
    //Criando o ID da ONG
    const id = crypto.randomBytes(4).toString('HEX');
    //Conectando no BD e inserindo os dados
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({ id })
    }
}