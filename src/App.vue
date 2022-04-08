<template>
  <navBar class="navbar"/>
  <AppBody class="appbody"/>
  
  <!-- <HelloWorld msg="Hello World!"/> -->
  <!-- <button @click="count++">count is: {{count}}</button> -->
</template>

<script>
// import func from 'vue-editor-bridge'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/Nav.vue'
import AppBody from './components/Body.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar,
    AppBody
  },

}
 
</script>


<style>
 
  .navbar{
    margin-bottom: 100px ;
  }
</style>