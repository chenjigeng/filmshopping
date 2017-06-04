<template lang='jade'>
.order-card.tc.bg-white.mb-20
  p.status 支付成功
  p.movie-name.large.mt-15 神奇女侠
  p.time.mt-25 6月5日 21:30-23:50
  p.location.mt-10 超级英雄电影院

  p.seat.mt-30 5排6座
  p.link.mt-10 约友联系方式: 18811111111
  p.tips.mt-10 请享受欢乐约影吧O(∩_∩)O
  el-button.btn(@click='confirm') OK
</template>

<script>
export default {
  props: ['content'],
  computed: {
    dialogVisible () {
      return this.$store.getters.getdialogVisible
    }
  },
  data () {
    return {
    }
  },
  methods: {
    confirm () {
      this.$confirm('确定要取消订单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-card {
  max-width: 300px;
  min-width: 300px;
  padding: 20px;
  margin-right: 30px;
  min-height: 320px;
  .btn {
    background: #000000;
    width: 150px;
    color: #fba214;
    font-size: 18px;
    font-weight: bold;
  }
  .status {
    font-weight: bold;
    color: #fba214;
  }
  .movie-name {
    font-size: 24px;
    font-weight: bold;
  }
  .time {
    font-size: 12px;
    font-weight: bold;
  }
  .location {
    font-size: 12px;
    font-weight: bold;
  }
  .seat {
    font-size: 14px;
    font-weight: bolder
  }
  .link {
    color: #fba214;
    font-weight: bold;
    font-size: 14px;
  }
  .tips {
    font-size: 12px;
    font-weight: bolder;
  }
}


.status {
  color: #fba214
}

.el-dialog__body {
  display: none
}
</style>

