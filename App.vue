<template>
  <div id="app">
    <formEdit msg="My test"/>
  </div>
</template>

<script>
import formEdit from './components/formEdit.vue'


export default {
  name: 'App',
  components: {
    formEdit
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
