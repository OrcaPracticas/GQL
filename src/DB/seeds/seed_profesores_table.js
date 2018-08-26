const Casual = require("casual");

const NAME_TABLE = "profesores";

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
                            nombre: Casual.name,
                            nacionalidad: Casual.country,
                            genero: Casual.random_element(
                                [
                                    "MASCULINO",
                                    "FEMENINO",
                                ],
                            ),
                        },
                    ],
                )
            ));
            return Promise.all(PROMISES);
        },
    )
);
