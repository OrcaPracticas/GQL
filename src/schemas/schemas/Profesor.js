const PROFESORES_SCHEMA = `
    # Entidad **Profesor** dentro del sistema
    type Profesor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }
    
    input newProfesor {
        nombre: String!
        nacionalidad: String!
        genero: Genero
    }
    
    input editProfesor{
        nombre: String
        nacionalidad: String
        genero: Genero
    }
`;

const GENERO_SCHEMA = `
    # Enumerador de **Genero**
    enum Genero {
        MASCULINO
        FEMENINO
    }
`;

export default `
    ${PROFESORES_SCHEMA}
    ${GENERO_SCHEMA}
`;
