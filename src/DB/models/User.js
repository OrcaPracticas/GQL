import Axios from "axios";

class User {
    constructor() {
        this.api = Axios.create({
            baseURL: "https://orca-practicas-api.herokuapp.com",
        });
    }

    list() {
        return this
            .api
            .get("/users")
            .then(response => response.data);
    }

    find(id) {
        return this
            .api
            .get(`/users/${id}`)
            .then(response => response.data);
    }
}

export default new User();
