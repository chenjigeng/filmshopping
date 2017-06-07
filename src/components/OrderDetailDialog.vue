<template>
<div>
  <el-dialog
    class='order-detail tc'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <p class='status'>支付成功</p>
    <p class='movie-name'>{{ scheduleInfo.movieName }}</p>
    <p class='time mb-5'>{{ scheduleInfo.startTime }} - {{ scheduleInfo.endTime }}</p>
    <p class='location mt-5'>{{ scheduleInfo.cinemaName }}</p>
    <p class='seat' v-for='t in tickets'>{{ t.posX }} 排 {{ t.posY }} 座</p>
    <div>
      <p class='link' v-if='yueInfo.phone'>约友联系方式是：{{ yueInfo.phone }}</p>
      <p class='link' v-if='yueInfo.message'>约友留言：{{ yueInfo.message }}</p>
      <p class='welcome'>请享受欢乐约影吧</p>
    </div>
    <img src='../assets/yue3.png' class='logo'>
    <el-button @click='toggleDialog'>OK</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      return this.$store.getters.getOrderDetailDialog
    },
    yueInfo () {
      return this.$store.getters.getYInfo
    },
    scheduleInfo () {
      return this.$store.getters.getScheduleInfo
    },
    tickets () {
      return this.$store.getters.getTickets
    }
  },
  data () {
    return {
      message: '',
      phone: ''
    }
  },
  methods: {
    toggleDialog () {
      this.$store.commit('toggleDiglog', 'OrderDetail')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'OrderDetail')
    },
    submit () {
      alert('TODO')
    }
  },
  watch: {
    dialogVisible: function (newV, oldV) {
      if (!newV) {
        // this.toggleDialog()
        this.$store.commit('toggleUpdateSeats', null)
      }
    }
  }
}
</script>

<style lang="scss">
.order-detail {
  color: black;
  .el-dialog__body {
    padding: 0;
    padding-bottom: 20px;
  }
  .btn {
    background: #000000;
    width: 150px;
    color: #fba214;
    font-size: 18px;
    font-weight: bold;
  }
  .status {
    font-weight: bold;
    color: black;
    font-size: 18px;
  }
  .movie-name {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
  .time {
    font-size: 12px;
    color: black;
    font-weight: bold;
  }
  .location {
    color: black;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .seat {
    color: black;
    font-size: 14px;
    font-weight: bolder
  }
  .logo {
    width: 60px;
  }
  button {
    font-size: 20px;
    color: #fde101;
    background: black;
    width: 180px;
    display: block;
    margin: auto;
    border-color: black;
  }
  .link {
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .welcome {
    color: black;
    font-weight: bold;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
  .el-dialog {
    background: #fba214;
    width: 450px;
  }
}

</style>

