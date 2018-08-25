import Express from "express";
import BodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import Schema from "./schemas";

const SERVER = Express();
const PORT = 8080;

/**
 * Ruta que nos permite acceder al servidor de GQL.
 * en este caso se utiliza el MiddelWare de express.
 */
SERVER.use(
    "/gql",
    BodyParser.json(),
    graphqlExpress({ schema: Schema }),
);

/**
 * Ruta para acceder a la interfaz grafica para GQL.
 */
SERVER.use(
    "/client",
    graphiqlExpress({
        endpointURL: "/gql",
    }),
);

/**
 * iniciando el servidor
 */
SERVER.listen(PORT, () => {
    console.log("El servidor esta corriendo :)");
});
