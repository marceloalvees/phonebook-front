<template>
    <div id="app">
      <div class="container">
        <TheSingIn class="panel" />
      </div>
    </div>
  </template>
  
  <script>
  import TheSingIn from '../components/formsSingIn.vue'
  
  export default {
    name: 'SingIn',
    components: {
      TheSingIn
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
  