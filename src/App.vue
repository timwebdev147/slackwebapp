<template>
  <navBar class="navbar"/>
  <AppBody class="appbody"/>
  <faQ class="faq"/>
  <fooTer/>
  <!-- <HelloWorld msg="Hello World!"/> -->
  <!-- <button @click="count++">count is: {{count}}</button> -->
</template>

<script>
// import func from 'vue-editor-bridge'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/Nav.vue'
import AppBody from './components/Body.vue'
import faQ from './components/FAQ.vue'
import fooTer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar,
    AppBody,
    faQ,
    fooTer
  },

}
 
</script>


<style>
 
  /* .navbar{
    margin-bottom: 100px ; 
  }
  .appbody{
    margin-bottom: ;
  } */
</style>