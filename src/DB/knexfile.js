/**
 * Archivo de configuracion en el cual
 * se le indica el cliente de motor
 * de base de datos
 */
module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: `${__dirname}/db.sqlite`,
        },
    },
    production: {},
};
