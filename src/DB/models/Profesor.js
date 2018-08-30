import { Model } from "objection";
import Path from "path";

class Curso extends Model {
    /**
     * Definicion de la tabla
     */
    static get tableName() {
        return "profesores";
    }

    /**
     * Definicion de las relaciones.
     */
    static get relationMappings() {
        const RELATION_MAP = {
            cursos: {
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, "/Curso"),
                join: {
                    from: "profesores.id",
                    to: "cursos.profesor_id",
                },
            },
        };
        return RELATION_MAP;
    }
}

export default Curso;
