<template lang='jade'>
.home
  header
    img.home-header-img(src="../assets/yue1.png" alt="约影")
    strong 一个可以约影的网站
  .content
    .desc
      p#p1 DO YOU WANT
      P#p2 A FREE TICKET?
    .movie-detail
      .side-bar   
      .movie-content
        .select-header
          span.font6.white SELECT MOVIE

        img(src='../assets/index.jpg' alt="约影")
      .movie-desc
        span#span1.font1 美女与野兽
        span#span2.font3 评分
        span#span3.font2.white 9.2
        span#span4.font5 SHAPE
        span#span5
          img(src="../assets/s1.png" alt="约影")
          span.font5.mg-hor-5.white xx
          span.font4 赞
        el-button.more-btn.font6 MORE
      .fix

    .carousel-container
      .c-title.white
        .text-lf.font7 HOT
        .text-rt.font7 MOVIE
      //- el-carousel(height="160px")
      //-   el-carousel-item
      //-     h3 test3
      el-row.movie-list
        el-col(v-bind:span="4" v-for="(item, index) in 6" v-bind:key="item" v-bind:class="index !== 5 ? 'mg-movie-item' : '' ").movie-item
          img(src='../assets/poster (1).jpg')



    //-   <el-carousel height="150px">
    //-   <el-carousel-item v-for="item in 4" :key="item">
    //-     <h3>{{ item }}</h3>
    //-   </el-carousel-item>
    //- </el-carousel>

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
              el-select(v-model="district" placeholder="请选择")
                el-option(v-for="item in districtOptions" v-bind:key="item.value" v-bind:label="item.label" v-bind:value="item.value")
        .rank-info
          span.font8.mg-rt-50.pad-t-20 RANK
          span.font8.mg-rt-50.pad-t-20 BY
          img(src="../assets/star2.png")
      .right
        .theaters
          el-row.item
            el-col(v-bind:span="8")
              span.font2 1
              div
                img(v-for="item in 5" v-bind:key="item" src="../assets/star1.png")
            el-col(v-bind:span="12")
              p.font3.text-lf THEATER NAME
              p.font4.text-rt localtion:xxxxxxxxxxx
              p.font4.text-rt tel:xxxxxxxxxxx
            el-col(v-bind:span="4")
              el-button.font6 BUY
          el-row.item
            el-col(v-bind:span="8")
              span.font2 1
              div
                img(v-for="item in 5" v-bind:key="item" src="../assets/star1.png")
            el-col(v-bind:span="12")
              p.font3.text-lf THEATER NAME
              p.font4.text-rt localtion:xxxxxxxxxxx
              p.font4.text-rt tel:xxxxxxxxxxx
            el-col(v-bind:span="4")
              el-button.font6 BUY



  footer

</template>

<script>
export default {
  name: 'Home',
  created () {
    console.log('http', this.$http)
  },
  data () {
    return {
      myTheme: 'light',
      districtOptions: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  min-width: 1000px
  header
    .home-header-img
      width: 100px
    span
      font-size: 20px
  
  .content
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
      
      .movie-content
        min-width: 440px
        img
          width: 440px
          height: 625px
      .movie-desc
        min-width: 500px
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
          right: 0
          top: 90px
        #span5
          right: 0
          top: 140px
          img
            width: 20px
        .more-btn
          width: 110px
          right: 0
          bottom: 25px
          color: #fcdf32
          background-color: black
          border: 0
          padding: 5px
      .fix
        flex: 1

    .carousel-container
      height: 160px
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
        box-sizing: border-box
        border: 1px solid black
        padding: 10px 12px

        .movie-item
          height: 138px
          width: 100px
          box-sizing: border-box
          border: 1px solid black
          img
            width: 100px
            height: 138px

    .rank-container
      position: relative
      display: flex
      flex-flow: row
      height: 500px
      margin-top: 20px
      .left
        .area
          display: flex
          flex-flow: row
          height: 350px
          .area-content
            width: 440px
            .district-select
              padding-top: 50px
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
        min-width: 500px
        .theaters
          box-sizing: border-box
          width: 500px
          padding: 12px
          border: 1px solid black
          .item
            border-top: 2px solid black
            margin-bottom: 15px
            // border-radius: 4px
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
  font-size: 28px
.font4
  font-size: 16px
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
.white
  color: white
.pad-t-20
  padding-top: 20px
.mg-hor-5
  margin: 0 5px
.mg-rt-50
  margin-right: 50px
.mg-movie-item
  margin-right: 24px
.text-lf
  text-align: left
.text-rt
  text-align: right
.select-header
  width: 200px
  height: 25px
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px
  background-color: #666666
  font-weight: bold
.side-bar
  min-width: 60px
  .dia-img
    img
      width: 60px
</style>

