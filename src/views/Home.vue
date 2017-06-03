<template lang='jade'>
.home
  h1 这是主页
  el-button(@click='toggle') 弹框哦
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      myTheme: 'light'
    }
  },
  components: {
  },
  methods: {
    toggle () {
      this.$store.commit('toggleDiglog')
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  color: red
h2
  color: blue
</style>

