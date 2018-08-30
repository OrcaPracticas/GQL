import Casual from "casual";

let contador = 1;
const DATA = [];

do {
    contador += 1;
    const SCHEMA = {
        id: contador,
        cuerpo: Casual.description,
        nombre: Casual.full_name,
    };
    DATA.push(SCHEMA);
} while (contador < 11);

export default DATA;
