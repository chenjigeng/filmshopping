<template>
  <div id="app">
    <Nav></Nav>
    <div class='main-content'>
      <Radio v-model='radio'>测试1</Radio>
      <Radio v-model='radio'>测试2</Radio>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  data () {
    return {
      radio: true
    }
  },
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang='sass'>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

#test
  color: red

.main-content
  margin: 40px
</style>
