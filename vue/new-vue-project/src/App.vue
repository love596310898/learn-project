<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="message" :email="jianCount" :count="incrementCount"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  data(){
    return {
      prevent: 1,
    }
  },
  computed:{
    message(){
      return 'caijinbo  ' + this.$store.state.message
    },
    ...mapState(['count', 'email']),
    ...mapGetters(['incrementCount', 'jianCount'])
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
