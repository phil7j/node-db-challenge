
exports.up = function(knex) {
    return knex.schema
        .createTable('Projects', tbl => {
            tbl.increments();

            tbl
                .string('project_name', 128)
                .notNullable()
                .unique();
            tbl
                .text('description')
            tbl
                .boolean('completed')
                .defaultTo(false)
                .notNullable();
        })
        .createTable('Resources', tbl => {
            tbl.increments()

            tbl
                .string('resource_name', 128)
                .notNullable()
                .unique()
            tbl
                .text('description')
        })
        .createTable('Tasks', tbl => {
            tbl.increments()

            tbl
                 .text('Description')
                .notNullable()
            tbl
                .text('Notes')
            tbl
                .boolean('completed')
                .defaultTo(false)
                .notNullable()
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('Projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('project_resources', tbl => {
            tbl.increments()

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('Projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('Resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};
