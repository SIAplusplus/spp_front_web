<template>
      <div class="container">
    <form action class= "form" @submit.prevent="login">
      <h2 class="">Iniciar Sesion</h2>
      <div class="input">
        <label for="#email">Usuario</label>
        <input
          v-model = "email"
          class="form-input" 
          type="email"
          name="email"
          id="email"
          placeholder="Usuario"
          required
        >
      </div>
      <div class="input">
        <label for="#password">Contraseña</label>
        <input
          v-model = "password"
          class="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
        >
      </div>
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Aceptar
      </button>

    </form>
  </div>
  <header class="header"></header>
  <div class="logo"><img src="../assets/logounalfake.png"></div>
  <footer class="foot"></footer>
</template>

<script>
import auth from "@/logic/auth";

export default {
  data: () =>({
    email: "",
    password: "",
    error: false
  }), 
  methods: {
    async login() {
  try {
    await auth.login(this.email, this.password);
    const user = {
      email: this.email
    };
    auth.setUserLogged(user);
    this.$router.push("/");
  } catch (error) {
    console.log(error);
    this.error = true;
  }
  }
}
};
</script>

<style>
.container {
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url("../assets/unaldesktop.jpg");
  top: 0%;
}
.contentform {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 505px;
  height: auto;
  transform: translate(-50%, -50%);
  padding: 4rem 4rem;
  border-radius: 25px;
  background: #B1B2B0;
  opacity: 80%;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #76232F;
  font-size: 1.25em;
}


.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}
.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #83545b;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}
.btn-pers:hover {
  background-color: #76232F;
  box-shadow: 0px 15px 20px rgba(118, 35, 47, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.header{
  background-color: #2c3e50;
  height: 40px;
  width: 80%;
  opacity: 80%;
  position: fixed;
  top: 0%;
  right: 0%;

}
.logo{
  background-color: #2c3e50;
  shape-image-threshold: 200px;
  position: fixed;
  left: 0%;
  height: auto;
  width: 20%;
  top: 0%;
  opacity: 80%;
}
.logo img{
  width: 100%;
  height: auto;
  top: 50%;
}
@supports(object-fit: cover){
    .logo img{
      height: auto;
      object-fit: cover;
      object-position: center center;
    }
}

.foot{
  height: 40px;
  width: 100%;
  opacity: 80%;
  position: fixed;
  bottom: 0px;
  background-color: #2c3e50;
}
</style>