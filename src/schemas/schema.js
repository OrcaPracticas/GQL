// se importa el makeExecutableSchema para que nuestra
// constante se genere como un schema
import { makeExecutableSchema } from "graphql-tools";

// Creacion del schema, es importante declarar
// el Query root ya que este indica el endpoint
const TYPE_DEF = `
    type Curso {
        id: ID!
        titulo: String!
    }
    
    type Query {
        curso: [Curso]
    }
`;

/**
 * Permite que el esquema declarado se tradusca
 * a un esquema de GQL
 */
const SCHEMA = makeExecutableSchema({
    typeDefs: TYPE_DEF,
});

export default SCHEMA;
