// Importacion de modelos referentes a la base de datos.
import { ModeloCurso, ModeloProfesor, ModeloComentario } from "../../DB/models";
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
        comentarios: () => ModeloComentario.query().eager(),
        curso: (rootValue, args) => ModeloCurso.query().findById(args.id),
        profesor: (rootValue, args) => ModeloProfesor.query().findById(args.id),
        buscar: (_, args) => {
            return [
                ModeloProfesor.query().findById(3),
                ModeloCurso.query().findById(2),
            ];
        },
    },
    ResultadoBusqueda: {
        __resolveType: object => ((object.nombre) ? "Profesor" : "Curso"),
    },
    Mutation: {
        profesorAdd: (_, args) => BuildMutation.query(ModeloProfesor, args).save,
        profesorEdit: (_, args) => BuildMutation.query(ModeloProfesor, args).edit,
        profesorDelete: (_, args) => BuildMutation.query(ModeloProfesor, args).delete,
        cursoAdd: (_, args) => BuildMutation.query(ModeloCurso, args).save,
        cursoEdit: (_, args) => BuildMutation.query(ModeloCurso, args).edit,
        cursoDelete: (_, args) => BuildMutation.query(ModeloCurso, args).delete,
        comentarioAdd: (_, args) => BuildMutation.query(ModeloComentario, args).save,
        comentarioEdit: (_, args) => BuildMutation.query(ModeloComentario, args).edit,
        comentarioDelete: (_, args) => BuildMutation.query(ModeloComentario, args).delete,
    },
};

export default RESOLVERS;
