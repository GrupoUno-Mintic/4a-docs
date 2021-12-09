const { gql } = require('apollo-server');
const transactionTypeDefs = gql `
    type Transaction {
        id_compra: String!
        user: String!
        id_producto: Int!
        des_producto: String!
        cantidad: Int!
        valor_producto: Int!
        date: String
        cuentaTienda: String!
        valor_total: Int
      
    }
    input TransactionInput {
        
        user: String!
        id_producto: Int!
        cantidad: Int!
        valor_producto: Int!
        
    }
    extend type Query {
        transactionByUser(username: String!): [Transaction]
    }
    extend type Mutation {
        createTransaction(transaction: TransactionInput!): Transaction
}
`;
module.exports = transactionTypeDefs;