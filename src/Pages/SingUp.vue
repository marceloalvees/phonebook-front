<template>
    <div id="app">
      <div class="container">
        <TheLogin class="panel" />
      </div>
    </div>
  </template>
  
  <script>
  import TheLogin from '../components/formsLogin.vue'
  
  export default {
    name: 'SingUp',
    components: {
      TheLogin
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  
  }
  </style>
  