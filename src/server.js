import Express from "express";
import Schema from "./schemas";
import "./DB/setup";

const SERVER = Express();
// server
const PORT = process.env.PORT || 8080;

// ruta por defecto graphql
Schema.applyMiddleware({ app: SERVER });

/**
 * iniciando el servidor
 */
SERVER.listen(PORT, () => {
    console.log("El servidor esta corriendo :)");
});
