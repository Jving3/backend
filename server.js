const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");

const app = express();

//Models:
const models = require('./sequelize/models/index')
models.sequelize.authenticate().then(() =>{//Conexion a la BD
    console.log("Estas conectado a la BD")
});
models.sequelize.sync()//Sincronizacion de los modelos con la BD

import resolvers from './graphQl/resolvers/resolvers'
import typeDefs from './graphQl/typeDefs/typeDefs'


let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: { models },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log("Corriendor Servidor Apollo en http://localhost:4000" + apolloServer.graphqlPath)
});