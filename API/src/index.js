const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const TransactionAPI = require('./dataSources/transaction_api');
const AuthAPI = require('./dataSources/auth_api');
const InventarioAPI = require('./dataSources/inventario_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        transactionAPI: new TransactionAPI(),
        authAPI: new AuthAPI(),
        inventarioAPI: new InventarioAPI(),
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});