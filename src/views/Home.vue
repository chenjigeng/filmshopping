<template lang='jade'>


.home
  .tri
  header#logo-header
    img.home-header-img(src="../assets/yue1.png" alt="约影")
    strong.ml-20 一个可以约影的网站
  .content(v-if='this.loading')
    h1 hh
  .content(v-if='!this.loading')
    .desc
      p#p1 DO YOU WANT
      P#p2 A FREE TICKET?
    .movie-detail
      .side-bar  
        img(src='../assets/sidebar1.png') 
      .movie-content.bg-black
        .select-header
          span.font6.white SELECT MOVIE
        img(:src='"/static/" + movies[0].post ' alt="约影" @click='clickMoreBtn')
      .movie-desc
        span#span1.font1 {{ movies[0].nameCn }}
        span#span2.font3 评分
        span#span3.font2.white {{ movies[0].rank }}
        span#span4.font5 SHAPE
        span#span5(@click='like')
          img(src='../assets/s2.png' v-if='liked')
          img(src="../assets/s1.png" alt="约影" v-if='!liked')
          span.font5.mg-hor-5.white {{ movies[0].like }}
          span.font4 赞
        el-button.more-btn.font6(@click='clickMoreBtn') MORE
    .carousel-container
      .c-title.white.bg-black
        .tl.font7 HOT
        .tr.font7 MOVIE
      el-row.movie-list
        el-col.movie-item(v-bind:span="4" v-for="(item, index) in movies" v-bind:key="item"
          v-bind:class="index < 2 ? 'bg-black' : '' ")
            img(:src='"/static/" + item.post' @click='gotoMovieDetail(item.id)')

    .rank-container
      .left
        .area
          .side-bar
          .area-content
            .select-header
              span.font6.white SELECT MOVIE
            .district-select
              div
                img(src="../assets/lo3.png")
              el-select(v-model="district" placeholder="请选择" @change='handleSelect')
                el-option(v-for="item in districtOptions" v-bind:key="item.value" v-bind:label="item.label" v-bind:value="item.value")
        .rank-info
          span.font8.mg-rt-50.pad-t-20.white RANK
          span.font8.mg-rt-50.pad-t-20 BY
          img(src="../assets/star2.png")
      .right
        .theaters
          el-row.item(v-for='(item,index) in cinemas' v-bind:key='index')
            el-col(v-bind:span="8")
              span.font2 {{ index }}
              div
                el-rate(v-model='item.rank' disabled allow-half)
            el-col(v-bind:span="12")
              p.font3.tl {{ item.name }}
              p.font4.f4-spe 地址: {{ item.address }}
            el-col(v-bind:span="4")
              el-button.font6(@click='clickBuyBtn(item.id)') BUY
  footer#footer

</template>

<script>

export default {
  name: 'Home',
  beforeRouteEnter (to, from, next) {
    if (to.hash && to.hash === '#footer') {
      next(vm => {
        vm.footer = true
        next()
      })
    } else {
      next()
    }
  },
  created () {
    let loading = this.$loading({fullscreen: true})
    Promise.all([this.$http.get('/api/movie/hotmovies/0'), this.$http.get('/api/cinema/location/0')])
      .then((response) => {
        for (let i = 0; i < response[0].body.length; i++) {
          response[1].body[i].rank /= 2
        }
        this.movies = response[0].body
        this.cinemas = response[1].body
        this.loading = false
        loading.close()
      })
  },
  updated () {
    if (this.footer) {
      location.href = location.href
    }
  },
  data () {
    return {
      footer: false,
      loading: true,
      liked: false,
      movies: [],
      cinemas: [],
      myTheme: 'light',
      district: '0',
      districtOptions: [{
        value: '0',
        label: '大学城'
      }, {
        value: '1',
        label: '华农'
      }]
    }
  },
  methods: {
    like () {
      if (this.liked) {
        return
      }
      this.$http.get(`/api/movie/like/${this.movies[0].id}`)
        .then((response) => {
          if (response.ok) {
            this.movies[0] = response.body
            this.liked = true
          }
        })
    },
    handleSelect (value) {
      this.$http.get(`/api/cinema/location/${value}`)
        .then(response => {
          this.cinemas = response.body
        })
    },
    gotoMovieDetail (id) {
      this.$router.push(`/movie-detail/${id}`)
    },
    fetch: function () {
      console.log('fetch')
    },
    clickMoreBtn: function () {
      this.$router.push({ path: `/movie-detail/${this.movies[0].id}` })
    },
    clickBuyBtn: function (id) {
      this.$router.push({ path: `/theater-detail/${id}` })
    }
  }

}
</script>

<style lang="sass" scoped>
#logo-header
  position: absolute
  top: 0
  left: 50%
  margin-left: -25px
.home
  img:hover
    cursor: pointer
  min-width: 1000px
  header
    .home-header-img
      width: 100px
    span
      font-size: 20px
  
  .content
    margin-top: 80px
    .desc
      p
        position: relative
        font-size: 35px
        margin: 10px
        font-weight: 900
        color: white
      #p2
        left: -100px

    .movie-detail
      display: flex
      flex-flow:row
      height: 660px
      width: 1000px
      margin: 0 auto
      
      .movie-content
        width: 440px
        img
          width: 440px
          height: 625px
      .movie-desc
        width: 500px
        position: relative
        padding-top: 15px
        &>span, &>button
          position: absolute
        #span1
          left: 16px
        #span2
          left: 16px
          top: 100px
        #span3
          left: 100px
          top: 80px
        #span4
          right: 20px
          top: 90px
        #span5
          right: 20px
          top: 140px
          img
            width: 20px
        .more-btn
          width: 110px
          right: 20px
          bottom: 25px
          color: #fcdf32
          background-color: black
          border: 0
          padding: 5px

    .carousel-container
      height: 160px
      width: 1000px
      margin: 0 auto
      .c-title
        float: left
        display: inline-block
        width: 250px
        height: 160px
      .el-carousel
        float: left
        width: 750px
      .movie-list
        float: left
        width: 750px
        height: 160px
        border: 1px solid black
        display: flex

        .movie-item
          height: 158px
          box-sizing: border-box
          display: flex
          align-items: center
          justify-content: center
          img
            width: 98px
            height: 138px

    .rank-container
      position: relative
      display: flex
      flex-flow: row
      height: 500px
      width: 1000px
      margin: 0 auto
      .left
        background-image: url(../assets/tri.jpg)
        background-size: 500px 500px
        .area
          display: flex
          flex-flow: row
          height: 300px
          .area-content
            width: 440px
            .district-select
              padding-top: 25px
              text-align: left
              img
                padding-left: 50px
                width: 100px

        .rank-info
          height: 150px
          text-align: left
          display: flex
          img
            width: 80px
            height: 80px
      .right
        width: 500px
        padding-top: 50px
        .theaters
          height: 425px
          overflow: auto
          box-sizing: border-box
          width: 500px
          padding: 12px
          border: 1px solid black
          .item
            border-top: 2px solid black
            margin-bottom: 15px
            .el-col
              img
                width: 15px
              p
                margin: 10px
              .el-button
                background-color: black
                color: #e3edcd
                border: 0
                width: 100%
                height: 120px

  footer
    height: 15px
    background-image: url(../assets/star1.png)
    background-size: 15px 15px

.font1
  font-size: 48px
  font-weight: bold
.font2
  font-size: 72px
  font-weight: bold
.font3
  font-size: 20px
.font4
  font-size: 16px
.f4-spe
  text-align: left
  font-size: 14px
  font-weight: bold
  color: black
.font5
  font-size: 14px
.font6
  font-size: 20px
.font7
  font-size: 58px
  font-weight: bold
.font8
  font-size: 44px
  font-weight: bold
.pad-t-20
  padding-top: 20px
.mg-hor-5
  margin: 0 5px
.mg-rt-50
  margin-right: 50px
.mg-movie-item-rt
  margin-right: 21.43px
.mg-movie-item-lf
  margin-left: 21.43px

.select-header
  width: 200px
  padding: 5px
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px
  background-color: #666666
  font-weight: bold
.side-bar
  min-width: 60px
  background-color: black
  img 
    width: 60px
    height: 450px

</style>

