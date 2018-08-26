import { Model } from "objection";
import Path from "path";

class Curso extends Model {
    /**
     * Definicion de la tabla
     */
    static get tableName() {
        return "cursos";
    }

    /**
     * Definicion de las relaciones.
     */
    static get relationMappings() {
        const RELATION_MAP = {
            profesor: {
                relation: Model.BelongsToOneRelation,
                modelClass: Path.join(__dirname, "/Profesor"),
                join: {
                    from: "cursos.profesor_id",
                    to: "profesores.id",
                },
            },
            comentarios: {
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, "/Comentario"),
                join: {
                    from: "cursos.id",
                    to: "comentarios.curso_id",
                },
            },
        };
        return RELATION_MAP;
    }
}

export default Curso;
