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
                realation: Model.BelongsToOneRelation,
                ModelCalss: Path.join(__dirname, "/Profesor"),
                join: {
                    from: "curso.profesor_id",
                    to: "profesor.id",
                },
            },
            comentarios: {
                realation: Model.BelongsToOneRelation,
                ModelCalss: Path.join(__dirname, "/Conmentario"),
                join: {
                    from: "cursos.id",
                    to: "comentarios.curso_is",
                },
            },
        };
        return RELATION_MAP;
    }
}

export default Curso;
