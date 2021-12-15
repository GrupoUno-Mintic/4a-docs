
<template>
  <div id="Transaction" class="transaction">
    <div class="container_transaction">
      <a name="transaccion" id="transaccion"></a>
      <h2>Realizar Transacción</h2>
      <form v-on:submit.prevent="processTransaction" name="t1" id="t1">
        <input
          type="number"
          v-model="createTransaction.id_producto"
          name="t1t1"
          id="t1t1"
          placeholder="Producto"
        />
        <br />
        <input
          type="number"
          v-model="createTransaction.cantidad"
          name="t1t2"
          id="t1t2"
          placeholder="Cantidad"
        />
        <br />
        <input
          type="number"
          v-model="createTransaction.valor_producto"
          name="t1t3"
          id="t1t3"
          placeholder="Valor"
        />
        <br />
        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  </div>
</template>
 

<script>
import gql from "graphql-tag";

export default {
  name: "Transaction",
  mounted() {
    if (localStorage.getItem("producto") != null) {
      document.t1.t1t1.value = localStorage.getItem("producto");

      document.t1.t1t2.value = localStorage.getItem("cantidad");

      document.t1.t1t3.value = localStorage.getItem("valor");
    }
  },
  data: function () {
    return {
      createTransaction: {
        user: localStorage.getItem("username"),
        id_producto: "",
        cantidad: "",
        valor_producto: "",
      },
    };
  },

  methods: {
    processTransaction: async function () {
      alert(this.createTransaction.id_producto);
      alert(this.createTransaction.cantidad);
      alert(this.createTransaction.valor_producto);

      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }
      localStorage.setItem("token_access", "");
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($refresh: String!) {
              refreshToken(refresh: $refresh) {
                access
              }
            }
          `,
          variables: {
            refresh: localStorage.getItem("token_refresh"),
          },
        })
        .then((result) => {
          localStorage.setItem("token_access", result.data.refreshToken.access);
        })
        .catch((error) => {
          this.$emit("logOut");
          return;
        });
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($transaction: TransactionInput!) {
              createTransaction(transaction: $transaction) {
                id_producto
                cantidad
                valor_producto
                valor_total
              }
            }
          `,
          variables: {
            transaction: this.createTransaction,
          },
        })
        .then((result) => {
          alert("Bien hecho, gracias por tu compra");
        })
        .catch((error) => {
          alert("Saldo Insuficiente");
        });
      /* localStorage.setItem("producto", null);*/
      localStorage.removeItem("producto");
    },
  },
};
</script>

<style>
.transaction {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("https://i.ibb.co/5vCWsJF/riders-republic-extreme-sports-2560x1440-xtrafondos-com.jpg");
}
.container_transaction {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 55%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  border-radius: 0px;
  background: #efe6e6;
  box-shadow: inset -5px -5px 15px #928c8c, inset 5px 5px 15px #ffffff;
}
.transaction h2 {
  color: #283747;
}
.transaction form {
  width: 50%;
}
.transaction input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.transaction button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.transaction button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>  

