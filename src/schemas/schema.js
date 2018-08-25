// se importa el makeExecutableSchema para que nuestra
// constante se genere como un schema
import { makeExecutableSchema } from "graphql-tools";

// Creacion del schema, es importante declarar
// el Query root ya que este indica el endpoint
const TYPE_DEF = `
    # Entidad **Curso** dentro del sistema
    type Curso {
        id: ID!
        titulo: String!
        descripcion: String!
        profesor: Profesor
        # Al utilizar @deprecated permite indicar que campos podemos eliminar en un futuro
        raiting: Float @deprecated(reason: "No me interesa el **raiting** en el curso")
        comentarios: [Comentario]
    }
    
    # Entidad **Profesor** dentro del sistema
    type Profesor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }
    
    # Enumerador de **Genero**
    enum Genero {
        MASCULINO
        FEMENINO
    }
    
    # Entidad **Comentario** dentro del sistema
    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }
    
    # **Root type Query** _endpoint_ principal
    type Query {
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
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
