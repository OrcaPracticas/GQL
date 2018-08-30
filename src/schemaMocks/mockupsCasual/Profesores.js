import Casual from "casual";

const SCHEMA = {
    id: Casual.uuid,
    nombre: Casual.full_name,
    nacionalidad: Casual.country,
};

export default SCHEMA;
