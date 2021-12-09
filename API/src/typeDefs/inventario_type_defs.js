const { gql } = require('apollo-server');
const inventarioTypeDefs = gql `
    type Inventario {
        codigo_barras: Int!
        nombre_prod: String!
        descripcion: String!
        cantidad: Int!
        fecha_ingreso: String!
        precio_venta: Int!
        precio_compra: Int!
        nit_tienda: String!
        talla: String
    }
    input InventarioInput {
        nombre_prod: String!
        descripcion: String!
        cantidad: Int!
        fecha_ingreso: String!
        precio_venta: Int!
        precio_compra: Int!
        nit_tienda: String!
        talla: String
    }
    input cantidadProducto{
        
        cantidad: Int!
        
    }

    extend type Query {
        inventarioByProducto(producto: Int!): [Inventario]
    }
    extend type Mutation {
        modificarInventario(nuevoProducto: Int!, producto:InventarioInput ): Inventario
        createProducto(producto: InventarioInput!): Inventario
        modificarCantidad(nuevoProducto: Int!, producto:cantidadProducto ): Inventario
}
`;
module.exports = inventarioTypeDefs;