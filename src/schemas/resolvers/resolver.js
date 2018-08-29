// Importacion de modelos referentes a la base de datos.
import { ModeloCurso, ModeloProfesor } from "../../DB/models";
import BuildMutation from "./BuildMutation";

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
    Mutation: {
        profesorAdd: (_, args) => BuildMutation.query(ModeloProfesor, args).save,
        profesorEdit: (_, args) => BuildMutation.query(ModeloProfesor, args).edit,
        profesorDelete: (_, args) => BuildMutation.query(ModeloProfesor, args).delete,
        cursoAdd: (_, args) => BuildMutation.query(ModeloCurso, args).save,
        cursoEdit: (_, args) => BuildMutation.query(ModeloCurso, args).edit,
        cursoDelete: (_, args) => BuildMutation.query(ModeloCurso, args).delete,
    },
};

export default RESOLVERS;
