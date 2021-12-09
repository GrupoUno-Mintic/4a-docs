const transactionResolver = {
    Query: {
        transactionByUser: async(_, { username }, { dataSources, userIdToken }) => {
            /*usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)*/
            return dataSources.transactionAPI.compraByUser(username)
                /*else
                    return null*/

        }
    },
    Mutation: {
        createTransaction: async(_, { transaction }, { dataSources, userIdToken }) => {
            /*usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (transaction.user == usernameToken)*/
            const this_transaction = {
                user: transaction.user,
                id_producto: transaction.id_producto,
                cantidad: transaction.cantidad,
                valor_producto: transaction.valor_producto,
                id_compra: transaction.id_compra = transaction.user + "-" + (new Date()).toISOString(),
                des_producto: transaction.des_producto = "prueba",
                cuentaTienda: transaction.cuentaTienda = "Tienda Deportiva Minball",
                date: transaction.date = (new Date()).toISOString(),
                valor_total: transaction.valor_total = 0
            }

            const modinventario = {
                nombre_prod: "uno",
                descripcion: transaction.des_producto,
                cantidad: transaction.cantidad,
                fecha_ingreso: "2021-11-30",
                precio_venta: transaction.valor_producto,
                precio_compra: transaction.valor_producto - 10000,
                nit_tienda: "1234567891",
                talla: "38_rc"
            }

            await dataSources.inventarioAPI.inventarioUpdate(this_transaction.id_producto, modinventario);
            return dataSources.transactionAPI.createCompra(this_transaction);
        }

        /*else
            return null*/

    }
};
module.exports = transactionResolver;