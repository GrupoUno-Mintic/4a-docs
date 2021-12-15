<template>
  <div id="Historial">
    <div class="container">
      <a name="cuenta" id="cuenta"></a>
      <h2>
        Titular Cuenta:
        <span>{{ username }}</span>
      </h2>
      <h2>
        Saldo:
        <span>${{ accountByUsername.saldo }} COP</span>
      </h2>
      <h2>
        Último Movimiento:
        <span>
          {{ accountByUsername.lastChange.substring(0, 10) }}
          {{ accountByUsername.lastChange.substring(11, 19) }}
        </span>
      </h2>
    </div>
    <h2>Transacciones</h2>
    <div class="container-table">
      <table>
        <tr>
          <th>#Factura</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Valor unitario</th>
          <th>Valor Total</th>
        </tr>
        <tr
          v-for="transaction in transactionByUser"
          :key="transaction.id_compra"
        >
          <td>{{ transaction.id_compra }}</td>
          <td>{{ transaction.date.substring(0, 10) }}</td>
          <td>{{ transaction.date.substring(11, 19) }}</td>
          <td>{{ transaction.id_producto }}</td>
          <td>{{ transaction.cantidad }}</td>
          <td>${{ transaction.valor_producto }}</td>
          <td>${{ transaction.valor_total }} COP</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";
export default {
  name: "Comprador",
  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
      transactionByUser: [],
      accountByUsername: {
        saldo: "",
        lastChange: "",
      },
    };
  },
  apollo: {
    transactionByUser: {
      query: gql`
        query ($username: String!) {
          transactionByUser(username: $username) {
            id_compra
            user
            id_producto
            des_producto
            cantidad
            valor_producto
            date
            cuentaTienda
            valor_total
          }
        }
      `,
      variables() {
        return {
          username: this.username,
        };
      },
    },
    accountByUsername: {
      query: gql`
        query ($username: String!) {
          accountByUsername(username: $username) {
            saldo
            lastChange
          }
        }
      `,
      variables() {
        return {
          username: this.username,
        };
      },
    },
  },
  created: function () {
    this.$apollo.queries.transactionByUser.refetch();
    this.$apollo.queries.accountByUsername.refetch();
  },
};
</script>


<style>
#Historial {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url("https://i.ibb.co/TWT0DNv/2968821.jpg");
  background-size: cover;
  height: 100%;
}
#Historial .container-table {
  width: 90%;
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: scroll;
  display: flex;
  border-radius: 5px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 8px #5a5a5a, -5px -5px 8px #ffffff;
}
#Historial table {
  width: 100%;
  border-collapse: collapse;

  border: 1px solid rgba (0, 0, 0, 0.3);
}
#Historial table td,
#Historial table th {
  border: 1px solid #ddd;

  padding: 8px;
}
#Historial table tr:nth-child(even) {
  background-color: #f2f2f2;
}
#Historial table tr:hover {
  background-color: #ddd;
}
#Historial table th {
  padding-top: 12px;
  padding-bottom: 12px;

  text-align: left;
  background-color: rgb(19, 6, 77);

  color: white;
}
#Historial > h2 {
  color: #283747;
  font-size: 25px;
}
#Historial .container {
  padding: 30px;
  border: 3px solid rgba (0, 0, 0, 0.3);

  border-radius: 20px;

  margin: 5% 0 1% 0;
}
#Historial .container h2 {
  font-size: 25px;

  color: #283747;
}
#Historial .container span {
  color: rgb(26, 9, 66);
  font-weight: bold;
}
</style>