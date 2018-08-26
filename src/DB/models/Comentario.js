import { Model } from "objection";
import Path from "path";

class Comentario extends Model {
    /**
     * Definicion de la tabla
     */
    static get tableName() {
        return "comentarios";
    }

    /**
     * Definicion de las relaciones.
     */
    static get relationMappings() {
        const RELATION_MAP = {
            curso: {
                relation: Model.BelongsToOneRelation,
                modelClass: Path.join(__dirname, "/Curso"),
                join: {
                    from: "comentarios.curso_id",
                    to: "cursos.id",
                },
            },
        };
        return RELATION_MAP;
    }
}

export default Comentario;
