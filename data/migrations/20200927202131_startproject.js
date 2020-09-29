
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments()
            tbl.string('name').notNullable().unique()
            tbl.string('description').notNullable()
            tbl.boolean('complete').notNullable()
        })
        .createTable('resource', tbl => {
            tbl.increments()
            tbl.string('name').notNullable().unique() 
            tbl.string('description')          
        })
        .createTable('task', tbl => {
            tbl.increments()
            tbl.integer('projectId').unsigned().notNullable().references('project.id')
            tbl.string('description').notNullable() 
            tbl.string('notes') 
            tbl.boolean('complete')
        })
        .createTable('project-resource', tbl => {
            tbl.primary(['projectId','resourceId'])
            tbl.integer('projectId').unsigned().notNullable().references('project.id').onUpdate('CASCADE').onDelete('CASCADE');
            tbl.integer('resourceId').unsigned().notNullable().references('resource.id').onUpdate('CASCADE').onDelete('CASCADE');
        })
        
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project-resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')

};
