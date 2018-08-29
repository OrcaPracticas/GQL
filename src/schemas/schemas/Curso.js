const CURSO_SCHEMA = `
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
    
    input newCurso {
        titulo: String!
        descripcion: String!
        raiting: Float
    }
    input editCurso {
        titulo: String
        descripcion: String
        raiting: Float
    }
`;

const COMENTARIOS_SCHEMA = `
    # Entidad **Comentario** dentro del sistema
    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }

    input newComentario {
        nombre: String!
        cuerpo: String!
    }

    input editComentario {
        nombre: String
        cuerpo: String
    }
`;


export default `
    ${CURSO_SCHEMA}
    ${COMENTARIOS_SCHEMA}
`;
