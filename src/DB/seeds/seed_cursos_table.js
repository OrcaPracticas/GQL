const Casual = require("casual");

const NAME_TABLE = "cursos";

/**
 * Permite el llenado de la base de datos
 * los datos con los que estammos llenando la
 * base son fake.
 */

exports.seed = (knex, Promise) => (
    knex(NAME_TABLE).del().then(
        () => {
            const PROMISES = Array(10).fill().map((_, index) => (
                knex(NAME_TABLE).insert(
                    [
                        {
                            id: index + 1,
                            titulo: Casual.title,
                            descripcion: Casual.sentences(3),
                            raiting: Casual.double(1, 10),
                            profesor_id: Casual.integer(1, 5),
                        },
                    ],
                )
            ));
            return Promise.all(PROMISES);
        },
    )
);
