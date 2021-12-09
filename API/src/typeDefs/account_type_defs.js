const { gql } = require('apollo-server');
const accountTypeDefs = gql`
    type Account {
        username: String!
        saldo: Int!
        lastChange: String!
    }
    extend type Query {
        accountByUsername(username: String!): Account
    }
`;
module.exports = accountTypeDefs;