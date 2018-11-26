
exports.up = function(knex, Promise) {
    return knex.schema.createTable('useless_superpower', (table) => {
        table.increments('id')
        table.string('name')
        table.string('superpower')
        table.string('img')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('useless_superpower')
};
