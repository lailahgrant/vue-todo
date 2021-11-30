<template>
  <div id="app">
    <!-- <h1>hello</h1>
    <h2>lailah</h2> -->
    <UserComponent />
  </div>
</template>

<script>

//import the component
import UserComponent from "./components/UserComponent.vue"

export default {
  name: 'App',
  components: {

    UserComponent
  
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
  margin-top: 60px;
}
</style>
