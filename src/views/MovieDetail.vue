<template lang='jade'>
div
  el-row.movie-detail(v-if='!loading')
    el-col.left(v-bind:span="12")
      .img-container
        img(:src="'/static/' + movie.post")
    el-col.right(v-bind:span="12")
      .select-header
        span.font-10.bold.white SELECT MOVIE
      .side-bar  
          img(src='../assets/sidebar2.png')
      .movie-info.tl.p-10
        p.font-18.bold.mt-15.mb-5 {{ movie.nameCn }}
        p.font-12.mt-5.mb-30 {{ movie.nameEn }}
        p.font-7 {{ movie.typeCn }}
        p.font-7 {{ movie.origin + '/' + movie.duration + '分钟'}}
        p.font-7 {{ movie.releaseTime + '大陆上映'}}
      .movie-desc.font-7.bg-white.ml-10
        span.tl {{ movie.introduction }}

      .movie-rank.tl.pt-25.pl-10
        p
          span.font-10.bold.mr-5.fix-rank 评分
          span.font-18.bold.white {{ movie.rank }}
        div.rank-stars
          img(v-for="item in 5" v-bind:key="item" src="../assets/star1.png")
      el-button.buy-btn.bg-black.white.font-10.bold(@click='gotoMoive') BUY


</template>

<script>
let types = ['动作', '冒险', '喜剧', '犯罪', '戏剧', '史诗', '惊悚', '音乐剧', '战争', '动画', '色情']
export default {
  name: 'MovieDetail',
  data () {
    return {
      movie: null,
      loading: true
    }
  },
  created () {
    let loading = this.$loading({'fullscreen': true})
    this.$http.get(`/api/movie/${this.$route.params.id}`)
      .then(response => {
        this.loading = false
        this.movie = response.body
        let type = this.movie.type
        let result = ''
        let mask = 1
        for (let i = 0; i < 11; i++) {
          if (type & mask) {
            result += ',' + types[i]
          }
          mask = mask << 1
        }
        result = result.substr(1)
        this.movie.typeCn = result
        loading.close()
      })
  },
  methods: {
    gotoMoive () {
      this.$router.push('/home#footer')
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

