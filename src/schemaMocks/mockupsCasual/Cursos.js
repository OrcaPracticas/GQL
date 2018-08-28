import Casual from "casual";

let contador = 1;
const DATA = [];

do {
    contador += 1;
    const SCHEMA = {
        id: Casual.uuid,
        titulo: Casual.title,
        descripcion: Casual.description,
        raiting: Casual.random,
    };
    DATA.push(SCHEMA);
} while (contador < 11);

export default DATA;
