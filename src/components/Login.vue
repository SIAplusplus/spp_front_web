<template>
      <div class="container">
    <form class= "contentform">
      <h2 class="">Iniciar Sesion</h2>
      <div class="input">
        <label for="email">Usuario</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="usuario"
        />
      </div>
      <div class="input">
        <label for="password">Contraseña</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="***************"
        />
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Aceptar
      </button>

    </form>
  </div>
</template>

<script>
export default {

}
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
</style>