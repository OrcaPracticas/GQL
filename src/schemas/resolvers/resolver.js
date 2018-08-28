// Importacion de modelos referentes a la base de datos.
import { ModeloCurso, ModeloProfesor } from "../../DB/models";

/**
 * Declarando la capa de datos que utilizara para resoler los querys.
 */
const RESOLVERS = {
    Query: {
        // permite extraer los datos de la DB y
        // con eager se le indica que relaciones tiene cada tabla.
        cursos: () => ModeloCurso.query().eager("[profesor, comentarios]"),
        profesores: () => ModeloProfesor.query().eager("cursos"),
        curso: (rootValue, args) => ModeloCurso.query().findById(args.id),
        profesor: (rootValue, args) => ModeloProfesor.query().findById(args.id),
    },
};

export default RESOLVERS;
