<template>
    <div id="app">
      <div class="container">
        <GridContacts/>
      </div>
    </div>
  </template>
  
  <script>
  import GridContacts from '../components/gridContacts.vue'
  
  export default {
    name: 'GridContact',
    components: {
      GridContacts
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
  