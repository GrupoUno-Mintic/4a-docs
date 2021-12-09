const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class TransactionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.compra_api_url;
    }
    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }
    async accountByUsername(username) {
        return await this.get(`/accounts/${username}`);
    }
    async createCompra(compra) {
        compra = new Object(JSON.parse(JSON.stringify(compra)));
        return await this.post('/compras', compra);
    }
    async compraByUser(username) {
        return await this.get(`/compras/${username}`);
    }
}
module.exports = TransactionAPI;