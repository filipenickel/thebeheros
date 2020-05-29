
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        //Chave estrangeira (Uma tabela que depende de outra)
        table.foreign('ong_id').references('id').inTable('ongs')

      });
};

exports.down = function(knex) {
      //Deleta tabela
      knex.schema.dropTable('incidents');
};
