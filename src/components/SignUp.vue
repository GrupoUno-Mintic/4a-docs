<template>
  <div class="signUp_user">
    <div class="container_signUp_user">
      <a name="registro" id="registro"></a>
      <h2>Unete a TD Minball S.</h2>

      <form v-on:submit.prevent="processSignUp">
        <input type="text" v-model="user.username" placeholder="Username" />
        <br />

        <input type="password" v-model="user.password" placeholder="Password" />
        <br />

        <input type="text" v-model="user.name" placeholder="Name" />
        <br />

        <input type="email" v-model="user.email" placeholder="Email" />
        <br />

        <input type="number" v-model="user.saldo" placeholder="Saldo inicial" />
        <br />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>
</template>




<script>
import gql from "graphql-tag";

export default {
  name: "SignUp",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
        saldo: 0,
      },
    };
  },

  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($userInput: SignUpInput!) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          };

          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
}
</script>






<style>
.signUp_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
 background-image: url("https://i.ibb.co/8dd8LFS/2968906.jpg");
  display: flex;
  justify-content: center;
  
}

.container_signUp_user {
  border-radius: 89px;
  background: #e0e0e0;
  box-shadow: inset 27px 27px 72px #898989, inset -27px -27px 72px #ffffff;
  width: 65%;
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signUp_user h2 {
  color: #283747;
}

.signUp_user form {
  width: 70%;
}

.signUp_user input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.signUp_user button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0 25px 0;
}

.signUp_user button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>