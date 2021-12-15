<template>
  <div class="seleccion">
    <div class="cabecera">
      <div class="titulo">
        <h1>
          ¡Bienvenido
          <span>{{ userDetailById.name }}</span
          >!
        </h1>
      </div>
    </div>
    <div class="articulo">
      <h1>SELECCIONA TU PRODUCTO</h1>
      <div class="productos">
        <div id="20" class="producto">
          <img
            src="https://i.ibb.co/H2TsDq7/UBaseball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">20. Cam. Blanca Beisbol</h5>
              <h5 id="valor">Valor: $160.000</h5>
              <h5 id="und">Disp.: 50 un.</h5>
            </div>
            <button v-on:click="XX">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="21" class="producto">
          <img
            src="https://i.ibb.co/xLtJY91/TSFootball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Cam. Columbus Crew SC</h5>
              <h5 id="valor">Valor: $260.000</h5>
              <h5 id="und">Disp.: 40 un.</h5>
            </div>
            <button v-on:click="XXI">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="22" class="producto">
          <img
            src="https://i.ibb.co/ZTVXQdB/TSFootball4.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Camiseta Barcelona</h5>
              <h5 id="valor">Valor: $260.000</h5>
              <h5 id="und">Disp.: 50 un.</h5>
            </div>
            <button v-on:click="XXII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="23" class="producto">
          <img
            src="https://i.ibb.co/7Kfw015/TSFootball1.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Cam. Real Madrid</h5>
              <h5 id="valor">Valor: $260.000</h5>
              <h5 id="und">Disp.: 80 un.</h5>
            </div>
            <button v-on:click="XXIII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="24" class="producto">
          <img
            src="https://i.ibb.co/kQHQRRY/BAmerican-Soccer.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Balón American football</h5>
              <h5 id="valor">Valor: $130.000</h5>
              <h5 id="und">Disp.: 20 un.</h5>
            </div>
            <button v-on:click="XXIV">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="25" class="producto">
          <img
            src="https://i.ibb.co/GQZpqL1/BBaloncesto.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Balón Baloncesto</h5>
              <h5 id="valor">Valor: $110.000</h5>
              <h5 id="und">Disp.: 90 un.</h5>
            </div>
            <button v-on:click="XXV">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="26" class="producto">
          <img
            src="https://i.ibb.co/C5zX8Bp/Bbaseball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Pelota de Beisbol</h5>
              <h5 id="valor">Valor: $45.000</h5>
              <h5 id="und">Disp.: 60 un.</h5>
            </div>
            <button v-on:click="XXVI">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="27" class="producto">
          <img
            src="https://i.ibb.co/d7GBWG0/Bfootball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Balón de Fútbol</h5>
              <h5 id="valor">Valor: $135.000</h5>
              <h5 id="und">Disp.: 101 un.</h5>
            </div>
            <button v-on:click="XXVII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="28" class="producto">
          <img
            src="https://i.ibb.co/v10KG8g/Kit-Ping-Pong.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Kit Ping-Pong</h5>
              <h5 id="valor">Valor: $186000</h5>
              <h5 id="und">Disp.: 30 un.</h5>
            </div>
            <button v-on:click="XXVIII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="29" class="producto">
          <img src="https://i.ibb.co/LxBC08j/BVoley.png" alt="" class="img" />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Balón Voleybol</h5>
              <h5 id="valor">Valor: $150.000</h5>
              <h5 id="und">Disp.: 70 un.</h5>
            </div>
            <button v-on:click="XXIX">¡Lo Quiero!</button>
          </div>
        </div>

        <div id="30" class="producto">
          <img
            src="https://i.ibb.co/jLwgds4/HBaseball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Casco de Beisbol</h5>
              <h5 id="valor">Valor: $165.000</h5>
              <h5 id="und">Disp.: 40 un.</h5>
            </div>
            <button v-on:click="XXX">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="31" class="producto">
          <img
            src="https://i.ibb.co/q160FSB/Kit-Baseball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">kit Beisbol</h5>
              <h5 id="valor">Valor: $460.000</h5>
              <h5 id="und">Disp.: 30 un.</h5>
            </div>
            <button v-on:click="XXXI">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="32" class="producto">
          <img
            src="https://i.ibb.co/qCvgRv0/Kit-Tennis.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Kit Tennis W</h5>
              <h5 id="valor">Valor: $330.000</h5>
              <h5 id="und">Disp.: 35 un.</h5>
            </div>
            <button v-on:click="XXXII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="33" class="producto">
          <img
            src="https://i.ibb.co/7nrN6HB/Kit-Tennis2.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Kit Tennis W-open</h5>
              <h5 id="valor">Valor: $360.000</h5>
              <h5 id="und">Disp.: 20 un.</h5>
            </div>
            <button v-on:click="XXXIII">¡Lo Quiero!</button>
          </div>
        </div>

        <div id="34" class="producto">
          <img
            src="https://i.ibb.co/Dtc2HYw/Sfootball.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Guayos Bota</h5>
              <h5 id="valor">Valor: $460.000</h5>
              <h5 id="und">Disp.: 70 un.</h5>
            </div>
            <button v-on:click="XXXIV">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="35" class="producto">
          <img
            src="https://i.ibb.co/sv6519r/SFootball2.png"
            alt=""
            class="img"
          />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Guayos Profesional</h5>
              <h5 id="valor">Valor: $360.000</h5>
              <h5 id="und">Disp.: 50 un.</h5>
            </div>
            <button v-on:click="XXXV">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="36" class="producto">
          <img src="https://i.ibb.co/yYKYyYP/SSport1.png" alt="" class="img" />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Tennis Alto Rendimiento</h5>
              <h5 id="valor">Valor: $320.000</h5>
              <h5 id="und">Disp.: 40 un.</h5>
            </div>
            <button v-on:click="XXXVI">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="37" class="producto">
          <img src="https://i.ibb.co/vhh8qMQ/SSport2.png" alt="" class="img" />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Tennis M-R</h5>
              <h5 id="valor">Valor: $260.000</h5>
              <h5 id="und">Disp.: 50 un.</h5>
            </div>
            <button v-on:click="XXXVII">¡Lo Quiero!</button>
          </div>
        </div>
        <div id="38" class="producto">
          <img src="https://i.ibb.co/t3DbGtp/SSport3.png" alt="" class="img" />
          <div class="comprar">
            <div class="descripcion">
              <h5 id="des">Tennis B-R</h5>
              <h5 id="valor">Valor: $110.000</h5>
              <h5 id="und">Disp.: 80 un.</h5>
            </div>
            <button v-on:click="XXXVIII">¡Lo Quiero!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Transaction from "./Transaction.vue";
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
export default {
  name: "Home",
  data: function () {
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      userDetailById: {
        username: "",
        name: "",
        email: "",
      },
    };
  },
  apollo: {
    userDetailById: {
      query: gql`
        query ($userId: Int!) {
          userDetailById(userId: $userId) {
            username
            name
            email
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
    },
  },
  methods: {
    XX: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 20);
        localStorage.setItem("valor", 160000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXI: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 21);
        localStorage.setItem("valor", 260000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 22);
        localStorage.setItem("valor", 260000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXIII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 23);
        localStorage.setItem("valor", 260000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXIV: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 24);
        localStorage.setItem("valor", 130000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXV: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 25);
        localStorage.setItem("valor", 110000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXVI: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 26);
        localStorage.setItem("valor", 45000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXVII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 27);
        localStorage.setItem("valor", 135000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXVIII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 28);
        localStorage.setItem("valor", 186000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXIX: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 29);
        localStorage.setItem("valor", 150000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXX: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 30);
        localStorage.setItem("valor", 165000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXI: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 31);
        localStorage.setItem("valor", 460000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 32);
        localStorage.setItem("valor", 330000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXIII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 33);
        localStorage.setItem("valor", 360000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXIV: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 34);
        localStorage.setItem("valor", 460000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXV: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 35);
        localStorage.setItem("valor", 360000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXVI: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 36);
        localStorage.setItem("valor", 320000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXVII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 37);
        localStorage.setItem("valor", 260000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
    XXXVIII: function () {
      /* this.$router.push({ name: "logIn" });*/
      var resultado = window.confirm(
        "¿Estas seguro que deseas llevar este producto?"
      );
      if (resultado === true) {
        let unidades = prompt("¿Cuántos unidades quieres?", 1);
        alert(
          `¡Estas a punto de adquirir ${unidades} unidades de este producto!`
        );

        localStorage.setItem("cantidad", unidades);
        localStorage.setItem("producto", 38);
        localStorage.setItem("valor", 110000);
        this.$router.push({ name: "transaction" });
      } else {
        window.alert(
          "Pareces indeciso, no te preocupes, puedes dar otra vueltica por nuestra tienda, seguro encotraras lo que buscas"
        );
      }
    },
  },
};
</script>


<style>
.seleccion {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0px;
  background: #312f2f;
  box-shadow: 20px 20px 60px #2a2828, -20px -20px 60px #383636;
}
.cabecera {
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
}
.titulo {
  width: 50%;
}

.seleccion h1 {
  color: #ebf0f5;
}
.seleccion h2 {
  color: #f7f9fc;
}
.seleccion span {
  color: rgb(231, 222, 224);
  font-weight: bold;
}
.details h3 {
  color: #d6dde6;
  text-align: center;
}
.details h2 {
  color: #e4e9ee;
}
.details {
  border-radius: 0px;
  background: #312f2f;
  box-shadow: inset 20px 20px 60px #2a2828, inset -20px -20px 60px #383636;
  width: 10%;
}

.articulo {
  width: 90%;
  height: 85%;
  display: flex;
  border-radius: 3px;
  background: linear-gradient(315deg, #333232, #3d3c3c);
  box-shadow: -49px -49px 98px #191818, 49px 49px 98px #595858;
  flex-direction: column;
}
.articulo h1 {
  color: #e5e7e9;
  width: 100%;
  height: 5%;
  justify-content: center;
  margin: 5vh;
}
.comprar {
  flex-direction: row;
  display: flex;
}
.comprar button {
  width: 50%;
  height: 40px;
  color: #989393;
  border-radius: 55px;
  background: #312f2f;
  box-shadow: 20px 20px 60px #2a2828, -20px -20px 60px #383636;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 5px 0;
}

.comprar button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
.articulo h5 {
  padding: 0;
  margin: 0;
}
</style>