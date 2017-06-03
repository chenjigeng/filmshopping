<template lang='jade'>
.home
  header
    img.home-header-img(src="../assets/yue1.png" alt="约影")
    span 一个可以约影的网站
  div.content
    div.desc
    div.movie-detail
    div.carousel-container
    div.rank-container
  footer




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
.home
  header
    .home-header-img
      width: 100px
h1
  color: red
h2
  color: blue
</style>

