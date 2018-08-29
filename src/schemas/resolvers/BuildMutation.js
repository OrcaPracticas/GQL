class BuildMutation {
    /**
     * Configuracion inicial
     *
     * @param  {Object} modelo Modelo de la tabla.
     * @param  {Object} params Campos.
     *
     * @return self Fluent interface
     */
    static query(modelo, params) {
        this.modelo = modelo;
        this.params = Object.values(params);
        return this;
    }

    /**
     * Permite borrar un registro.
     *
     * @return entidad.
     */
    static get delete() {
        return (
            this.modelo
                .query()
                .findById(...this.params)
                .then(data => this.modelo
                    .query()
                    .deleteById(...this.params)
                    .then((filas) => {
                        if (filas > 0) return data;
                        throw new Error(`El registro con el id ${this.params[0]} no se puede elmiar`);
                    }))
        );
    }

    /**
     * Permite agregar un nuevo registro.
     *
     * @return entidad.
     */
    static get save() {
        return (
            this.modelo
                .query()
                .insert(...this.params)
        );
    }

    /**
     * Permite editar un nuevo registro.
     *
     * @return entidad.
     */
    static get edit() {
        return (
            this.modelo
                .query()
                .patchAndFetchById(...this.params)
        );
    }
}

export default BuildMutation;
