<template lang='jade'>
  .theater-detail
    .select-header
      span.font-10.bold.white SELECT MOVIE
    .side-bar.bg-white 
      img(src='../assets/sidebar2.png')
    .theater-header
      .t-name-container.p-15
        div.t-name.black.font-20.bold
        div.t-info.white.tl.fr.font-8.bold
          p.m-5 location: xxxxxxxxxxxxxxxx
          p.m-5 tel: 111111111111
      .t-img-container
        img(src='../assets/theater1.jpg')
      .t-rank
        p
          span.font-10.bold.mr-5.fix-rank 评分
          span.font-18.bold.white 9.8
        div.rank-stars
          img(v-for="item in 5" v-bind:key="item" src="../assets/star1.png")
    .movie-list
      p.font8.bold.tl 影院同期热播电影
      el-row.movie-list(ref='movieItems')
        el-col.movie-item.bg-color(v-bind:span="4" v-for="(item, index) in movies" v-bind:key="item")
          img(:src='"/static/" + item.post' @click='selectMovie(index, $event)')
    .select-list
      .s-item.mb-20(v-for='item in schedule' v-bind:key='item')
        span.font-10.bold.fl {{ item.startTime }} - {{ item.endTime }}
        el-button.font-10.s-btn.fr(@click='clickSelectBtn') SELECT SEAT
        .clear
</template>

<script>
export default {
  name: 'TheaterDetail',
  data () {
    return {
      movies: [],
      myTheme: 'light',
      schedule: []
    }
  },
  created () {
    this.$http.get(`/api/cinema/${this.$route.params.id}`)
      .then(response => {
        console.log(response)
      })
    this.$http.get(`/api/movie/cinema/${this.$route.params.id}`)
      .then(response => {
        this.movies = response.body
        console.log(this.movies)
        this.$http.post('/api/schedule/scheduleinfo', {
          cinemaId: this.$route.params.id,
          movieId: this.movies[0].id
        }, {
          emulateJSON: true
        })
        .then(response => {
          console.log(response)
          this.schedule = response.body
        })
      })
  },
  methods: {
    selectMovie (index, e) {
      console.log(index)
      console.log(e)
      this.$http.post('/api/schedule/scheduleinfo', {
        cinemaId: this.$route.params.id,
        movieId: this.movies[index].id
      }, {
        emulateJSON: true
      })
      .then(response => {
        console.log(response)
        this.schedule = response.body
        console.log(this.$refs.movieItems)
      })
      for (let i = 0; i < this.$refs.movieItems.$el.children.length; i++) {
        this.$refs.movieItems.$el.children[i].className = this.$refs.movieItems.$el.children[i].className.replace(/ *active/, '')
      }
      e.target.parentElement.className += ' active'
    },
    clickSelectBtn: function () {
      this.$router.push({ path: `/select-seat/${this.$route.params.id}` })
    }
  }
}
</script>

<style lang="sass" scoped>
$bg-color: #fba214

.theater-detail
  position: relative
  min-width: 1000px
  height: 350px
  .select-header
    position: absolute
    right: 60px
  .side-bar
    position: absolute
    right: 0
    top: 10px
  .theater-header
    position: relative
    width: 1000px
    height: 350px
    // top: 80px
    margin: 0 auto
    .t-name-container
      z-index: 1
      position: relative
      top: 100px
      background-color: rgba(255, 255, 255, 0.3)
      width: 400px
      height: 120px
      .t-name
        width: 300px
        border-top: 2px solid white
      .t-info
        position: absolute
        bottom: 0
        right: 0
    .t-img-container
      position: absolute
      left: 215px
      top: 0
      width: 650px
      height: 350px
      img
        width: 100%
        height: 100%
    .t-rank
      position: absolute
      left: 20px
      bottom: 0
      display: inline-block
  .movie-list
    width: 1000px
    margin: 10px auto
    background: #555
    .movie-item
      height: 200px
      box-sizing: border-box
      display: flex
      align-items: center
      justify-content: center
      background: #555
      img
        width: 100px
        height: 140px
    .movie-item.active
      img
        border: 3px solid #e4c38d
  .select-list
    width: 1000px
    margin: 0 auto
    .s-item
      .s-btn
        background-color: black
        color: $bg-color
        border: 0

.select-header
  z-index: 1
  position: absolute
  top: 20px
  right: 60px
  width: 200px
  padding: 5px
  border-top-left-radius: 8px
  border-bottom-left-radius: 8px
  background-color: #666666
.side-bar
  background-color: $bg-color

</style>

