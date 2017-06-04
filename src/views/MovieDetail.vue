<template lang='jade'>
el-row.movie-detail
  el-col.left(v-bind:span="12")
    .img-container
      img(src="../assets/poster2.jpg")
  el-col.right(v-bind:span="12")
    .select-header
      span.font-10.bold.white SELECT MOVIE
    .side-bar  
        img(src='../assets/sidebar2.png')
    .movie-info.tl.p-10
      p.font-18.bold.mt-15.mb-5 神奇女侠
      p.font-12.mt-5.mb-30 Wonder Woman
      p.font-7 type 动作 阿斯达所按时的按时
      p.font-7 国家/时间
      p.font-7 上映时间
    .movie-desc.font-7.bg-white.ml-10
      span.tl 你可以用它开发网页样式，但是没法用它编程。也就是说，CSS基本上是设计师的工具，不是程序员的工具。在程序员眼里，CSS是一件很麻烦的东西。它没有变量，也没有条件语句，只是一行行单纯的描述，写起来相当费事。

    .movie-rank.tl.pt-25.pl-10
      p
        span.font-10.bold.mr-5.fix-rank 评分
        span.font-18.bold.white 9.8
      div.rank-stars
        img(v-for="item in 5" v-bind:key="item" src="../assets/star1.png")
    el-button.buy-btn.bg-black.white.font-10.bold BUY


</template>

<script>
export default {
  name: 'MovieDetail',
  data () {
    return {
      myTheme: 'light'
    }
  }
}
</script>

<style lang="sass" scoped>
$bg-color: #fba214
.movie-detail
  min-width: 1000px
  .left
    min-width: 500px
    height: 730px
    .img-container
      display: flex
      box-sizing: border-box
      justify-content: center
      align-items: center
      padding: 60px 55px
      background-color: black
      img
        width: 385px
        height: 610px

  .right
    min-width: 500px
    height: 730px
    position: relative
    .movie-info.tl.p-10
    .movie-desc.font-7.bg-white
      margin-right: 60px
      span
        display: inline-block
        padding: 20px
        z-index: 2
    .movie-rank
      p 
        margin: 0
      .fix-rank
        position: relative
        bottom: 5px
      
    .buy-btn
      width: 200px
      border-radius: 5px
      position: absolute
      bottom: 10px
      right: 30px



.select-header
  position: absolute
  top: 20px
  right: 60px
  width: 200px
  padding: 5px
  border-top-left-radius: 8px
  border-bottom-left-radius: 8px
  background-color: #666666
.side-bar
  z-index: 0
  position: absolute
  top: 20px
  right: 0
  width: 60px
  background-color: $bg-color
  img 
    width: 60px
    height: 450px
</style>

