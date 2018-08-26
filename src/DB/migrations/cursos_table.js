const NAME_TABLE = "cursos";

/**
 * Inidica que se ejecuta se realizara en la migrcion
 * para este casos se crea la tabla.
 */
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.createTable(
            NAME_TABLE,
            (table) => {
                table.increments("id").primary().unsigned();
                table.string("titulo");
                table.string("descripcion");
                table.double("raiting");
                table.integer("profesor_id").unsigned();
            },
        ),
    ])
);

/**
 * Al terminar el proceso de migracion se libera la tabla.
 */
exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTable(NAME_TABLE),
    ])
);
