<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent,
  }
}
</script>
<style>
body {
  padding: 110px;
  margin: 0 auto;
  background-color: #1E293B ;
  color: white;
  display: block;
}



</style>