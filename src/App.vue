<template>
  <div id="app" class="app">
    <div class="header">
      <div class="contenedor_slider_M">
        <div class="slider_M" id="slider_M">
          <div class="slider_section_M">
            <img
              src= "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://www.mundoprimaria.com/wp-content/uploads/2020/07/deporte.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://www.mundodeportivo.com/files/image_449_220/uploads/2021/08/22/612273b9ecd09.jpeg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://www.uexternado.edu.co/wp-content/uploads/2020/08/deportes-1.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://st3.depositphotos.com/3591429/18305/i/600/depositphotos_183057156-stock-photo-sports-tools-on-green-grass.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://www.efadeporte.com/blog/wp-content/uploads/2017/08/tipos-de-asociaciones-deportivas-en-espa%C3%B1a.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://international-experience.es/wp-content/uploads/2019/06/deportes-estados-unidos.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://static.eldiario.es/clip/a33d8e0e-4d9a-4607-81ab-07e6d0c426f7_16-9-aspect-ratio_default_0.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
          <div class="slider_section_M">
            <img
              src="https://cdn.diferenciador.com/imagenes/tipos-de-deportes-og.jpg"
              alt=""
              class="slider_img_M"
            />
          </div>
        </div>
        <div class="slider_btn_M slider_btn--right_M" id="btn-right_M">
          &#62;
        </div>
        <div class="slider_btn_M slider_btn--left_M" id="btn-left_M">&#60;</div>
      </div>
      <h1>MINBALL STORAGE</h1>
      <nav>
        <a href="#login">
          <button v-if="!is_auth" v-on:click="loadLogIn">Inicio</button>
        </a>

        <button v-if="is_auth" v-on:click="loadHome">Bienvenido</button>

        <button v-if="is_auth" v-on:click="loadComprador">Cuenta</button>

        <button v-if="is_auth" v-on:click="loadTransaction">Transacción</button>

        <button v-if="is_auth" v-on:click="logOut">Salir</button>

        <a href="#registro">
          <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
        </a>
      </nav>
    </div>
    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <div class="footer">
      <h1>Misión Tic Ciclo 4</h1>
      <div class="ing">
        <h2>Paola Andrea Lozada Gutiérrez</h2>
        <h2>Yujak Stiwar Vélez</h2>
        <h2>Julián Cortes</h2>

      </div>
          
    </div>
  </div>
</template>




<script>
export default {
  mounted() {
    const slider = document.querySelector("#slider_M");
    let sliderSection = document.querySelectorAll(".slider_section_M");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    const btnLeft = document.querySelector("#btn-left_M");
    const btnRight = document.querySelector("#btn-right_M");
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    function Next_M() {
      let sliderSectionFirst =
        document.querySelectorAll(".slider_section_M")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    function Prev_M() {
      let sliderSection = document.querySelectorAll(".slider_section_M");
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    btnRight.addEventListener("click", function () {
      Next_M();
    });
    btnLeft.addEventListener("click", function () {
      Prev_M();
    });
    setInterval(function () {
      Next_M();
    }, 5000);
  },

  name: "App",

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
  },
  methods: {
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },

    completedLogIn: function (data) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.loadHome();
    },

    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },

    loadHome: function () {
      this.$router.push({ name: "home" });
    },

    loadComprador: function () {
      this.$router.push({ name: "comprador" });
    },
    loadTransaction: function () {
      this.$router.push({ name: "transaction" });
    },
    
    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
      this.loadLogIn();
		},
  }
}
</script>






<style>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 100vh;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header h1 {
  width: 40%;
  color: floralwhite;
  text-align: center;
  z-index: 1;
  font-size: 10vh;
  border-radius: 20px;
  border-radius: 173px;
  background: transparent;
  box-shadow: inset 35px 35px 70px #1a1919, inset -35px -35px 70px #666565;
  display: flex;
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: right;
  align-items: flex-end;
  z-index: 1;
}

.header nav button {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #e2ecec;
  border-radius: 5px;
  padding: 20px 20px;
  border-radius: 0px;
  background: transparent;
  box-shadow: inset -5px -5px 15px #636060, inset 5px 5px 15px #e3dcdc;
}

.header nav button:hover {
  color: #070707;
  background: #f7f4f4;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: 300vh;
  margin: 0%;
  padding: 0%;

  background: #fdfefe;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
  
  display: flex;
}

.footer h1 {
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.ing{
  width: 50%;
  height: 100%;
  align-content: flex-end;
  justify-items: flex-end;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}
.ing h2{
  width: 100%;

  display: flex;
  padding: 0;
 justify-items: flex-end;
 
 
}
.contenedor_slider_M {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
}
.slider_img_M {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  
}
.slider_M {
  display: flex;
  height: 100%;
  width: 900%;
}
.slider_section_M {
  width: 100%;
}
.slider_btn_M {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
  font-size: 250%;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
}
.slider_btn_M:hover {
  background: #fff;
}
.slider_btn--left_M {
  left: 10px;
  z-index: 2;
}
.slider_btn--right_M {
  right: 10px;
  z-index: 2;
}
</style>
