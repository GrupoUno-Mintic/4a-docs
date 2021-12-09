const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class InventarioAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.inventario_api_url;
    }
    async createProducto(inventario) {
        inventario = new Object(JSON.parse(JSON.stringify(inventario)));
        return await this.post('/inventario/create', inventario);
    }
    async productos() {
        return await this.get('/inventario');
    }
    async inventarioByProducto(producto) {
        return await this.get(`/inventario/${producto}`);
    }
    async inventarioUpdate(producto, modificacion) {
        return await this.put(`/inventario/update/${producto}`, modificacion);
    }
    async inventarioDelete(producto) {
            return await this.post(`/inventario/delete/${producto}`);
        }
        /*async createProducto(nuevo_producto) {
            nuevo_producto = new Object(JSON.parse(JSON.stringify(nuevo_producto)));
            return await this.post('/inventario/create', nuevo_producto);
        }*/

}
module.exports = InventarioAPI;