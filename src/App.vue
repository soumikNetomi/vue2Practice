<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>
<style>
*{
  margin: 0px;
  padding: 0px;
}
</style>

