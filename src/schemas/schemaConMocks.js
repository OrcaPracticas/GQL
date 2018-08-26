// se importa el makeExecutableSchema para que nuestra
// constante se genere como un schema
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

// mockups
import { MockComentarios, MockCursos, MockProfesores } from "./mockups";
import { CasualComentarios, CasualCursos, CasualProfesores } from "./mockupsCasual";

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
 * Declarando la capa de datos que utilizara resoler.
 */
const RESOLVERS = {
    Query: {
        cursos: () => MockCursos,
    },
    Curso: {
        profesor: () => MockProfesores,
        comentarios: () => MockComentarios,
    },
    Profesor: {
        cursos: () => MockCursos,
        genero: () => "MASCULINO",
    },
};

/**
 * Permite que el esquema declarado se tradusca
 * a un esquema de GQL
 */
const SCHEMA = makeExecutableSchema({
    // Referencia al schema creados
    typeDefs: TYPE_DEF,
    // Referencia a los resolvers.
    resolvers: RESOLVERS,
});

/**
 * Crecion mocks utilizando casual
 * serealiza la integracion con la addMockFunctionsToSchema
 */
addMockFunctionsToSchema({
    // se indica el schema al que afectaremos
    schema: SCHEMA,
    // Definicion de los mocks a generar
    mocks: {
        Curso: () => CasualCursos,
        Profesor: () => CasualProfesores,
        Comentario: () => CasualComentarios,
    },
    // Permite utilizar la data de los resolvers que estan de clarados
    // true : utiliza los resolvers
    // false : utiliza el mock definido
    perserveResolvers: true,
});

export default SCHEMA;
