<template lang='jade'>
.home
  h1 这是主页
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      myTheme: 'light'
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

