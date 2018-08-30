import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./app/registerServiceWorker";
import App from "./app/App";
import "./app/index.css";

const CLIENT_APOLLO = new ApolloClient({
    uri: "/api",
});


ReactDOM.render(
    <ApolloProvider client={CLIENT_APOLLO}>
        <App />
    </ApolloProvider>, document.getElementById("root"),
);
registerServiceWorker();
