const inventarioResolver = {

    Query: {
        inventarioByProducto: async(_, { producto }, { dataSources, userIdToken }) => {
            /*usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)*/
            return dataSources.inventarioAPI.inventarioByProducto(producto)
                /*else return null*/

        }
    },
    Mutation: {
        createProducto: async(_, { producto }, { dataSources }) => {
            return dataSources.inventarioAPI.createProducto(producto)
        },
        modificarInventario: async(_, { nuevoProducto, producto }, { dataSources }) => {

                return dataSources.inventarioAPI.inventarioUpdate(nuevoProducto, producto);

            }
            /*,
                    modificarCantidad: async(_, { nuevoProducto, producto }, { dataSources, nomP }) => {
                        const modifproduc = {
                            nombre_prod: producto.nombre_prod = nomP,
                            descripcion: producto.descripcion = "dos",
                            cantidad: producto.cantidad,
                            fecha_ingreso: producto.fecha_ingreso = "2021-11-30",
                            precio_venta: producto.precio_venta = 50000,
                            precio_compra: producto.precio_compra = 30000,
                            nit_tienda: producto.nit_tienda = "1234567891",
                            talla: producto.talla = "38_rc",
                        }
                        return dataSources.inventarioAPI.inventarioUpdate(nuevoProducto, modifproduc);

                    },*/
    }
};
module.exports = inventarioResolver;