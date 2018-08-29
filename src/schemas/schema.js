// se importa el makeExecutableSchema para que nuestra
// constante se genere como un schema
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import { Curso, Profesor } from "./schemas";

// Creacion del schema, es importante declarar
// el Query root ya que este indica el endpoint
const ROOT_QUERY = `
    # **Busqueda
    union ResultadoBusqueda = Profesor | Curso

    # **Root type Query** _endpoint_ principal
    type Query {
        cursos: [Curso]
        profesores: [Profesor]
        comentarios: [Comentario]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
        buscar(query: String!): [ResultadoBusqueda]
    }
    
    type Mutation {
        profesorAdd(profesor: newProfesor): Profesor
        profesorEdit(id: Int!, profesor: editProfesor): Profesor
        profesorDelete(id: Int!): Profesor
        cursoAdd(curso: newCurso): Curso
        cursoEdit(id: Int!, curso: editCurso): Curso
        cursoDelete(id: Int!): Curso
        comentarioAdd(comentario: newComentario): Comentario
        comentarioEdit(id: Int!, comentario: editComentario): Comentario
        comentarioDelete(id: Int!): Comentario
    }
`;

/**
 * Permite que el esquema declarado se tradusca
 * a un esquema de GQL
 */
const SCHEMA = makeExecutableSchema({
    // Referencia al schema creados
    typeDefs: [
        ROOT_QUERY,
        Curso,
        Profesor,
    ],
    // Referencia a los resolvers.
    resolvers,
});

export default SCHEMA;
