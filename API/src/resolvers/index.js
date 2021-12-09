const accountResolver = require('./account_resolve');
const transactionResolver = require('./transaction_resolve');
const usersResolver = require('./auth_resolve');
const lodash = require('lodash');
const inventarioResolver = require('./inventario_resolve');
const resolvers = lodash.merge(accountResolver, transactionResolver, usersResolver, inventarioResolver);
module.exports = resolvers;