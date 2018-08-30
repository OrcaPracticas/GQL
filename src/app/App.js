import React from "react";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const App = (props) => {
    const { data } = props;
    let render = "";
    if (data.loading) {
        render = (
            <div className="App">
                <h1>Cargando</h1>
            </div>
        );
    } else {
        render = (
            <div className="App">
                <h1>Listado de Cursos</h1>
                {
                    data.cursos.map(curso => (
                        <div className="Curso">
                            <h3>{curso.titulo}</h3>
                            <p>{curso.descripcion}</p>
                            <hr />
                            <p>
                            Profesor:
                                {curso.profesor.nombre}
                            </p>
                        </div>
                    ))
                }
            </div>
        );
    }
    return render;
};

const CursosQuery = gql`
  query CursosQuery {
    cursos {
      titulo
      descripcion
      raiting
      profesor {
        nombre
      }
    }
  }
`;

export default graphql(CursosQuery, {
    options: {
        pollInterval: 2000,
    },
})(App);
