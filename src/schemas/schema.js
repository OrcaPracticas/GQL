// Importa ApolloServer que permite integrar los resolvers y typedef
// importa gql el cual permite interpretar el schema.
import { ApolloServer, gql } from "apollo-server-express";

import resolvers from "./resolvers";
import { Curso, Profesor } from "./schemas";


// Creacion del schema, es importante declarar
// el Query root ya que este indica el endpoint
const ROOT_QUERY = gql`
    # **Busqueda
    union ResultadoBusqueda = Profesor | Curso

    type User {
        id: ID!
        name: String
        age: Int
        email: String
    }

    # **Root type Query** _endpoint_ principal
    type Query {
        user: [User]
        cursos: [Curso]
        profesores: [Profesor]
        comentarios: [Comentario]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
        buscar(query: String!): [ResultadoBusqueda]
        findUSer(id: Int): User
    }
    # **Mutaciones disponibles dentro del proyecto
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
const SCHEMA = new ApolloServer({
    // Referencia al schema creados
    typeDefs: [
        ROOT_QUERY,
        Curso,
        Profesor,
    ],
    // Referencia a los resolvers.
    resolvers,
    formatError: error => ({
        errorCode: "JMZ-DB",
        name: error.name,
        mensaje: error.message,
    }),
});

export default SCHEMA;
