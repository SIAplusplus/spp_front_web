<template>
  <div class="app">
    <Login />
  </div>
  <header class="header"></header>
  <div class="logo"><img src="../src/assets/logounalfake.png"></div>
  <footer class="foot"></footer>
</template>

<script>
import Login from './components/Login.vue'; 
export default {
  name: 'App',
  components: {
    Login
}
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
