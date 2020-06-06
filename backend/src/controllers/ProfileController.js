const connection = require('../database/conection')

module.exports = {
  async listagem(request, response) {
    const ong_id = request.headers.autorization

    const incidents = await connection('incidents').where('ong_id', ong_id)
    .select('*')

  return response.json(incidents)
  }
}