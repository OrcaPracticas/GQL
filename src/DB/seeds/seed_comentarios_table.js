const Casual = require("casual");

const NAME_TABLE = "comentarios";

/**
 * Permite el llenado de la base de datos
 * los datos con los que estammos llenando la
 * base son fake.
 */
exports.seed = (knex, Promise) => (
    knex(NAME_TABLE).del().then(
        () => {
            const PROMISES = Array(40).fill().map((_, id) => (
                knex(NAME_TABLE).insert(
                    [
                        {
                            id,
                            nombre: Casual.name,
                            cuerpo: Casual.sentences(3),
                            curso_id: Casual.integer(1, 10),
                        },
                    ],
                )
            ));
            return Promise.all(PROMISES);
        },
    )
);
