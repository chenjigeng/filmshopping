<template>
  <div class="hello">
    <div>计数器: {{ count }} </div>
    <Button type='primary' @click='incre'>计数</Button>
    <Modal
      v-model='showModal'
      title='普通的模态框'
      @on-ok='ok'
      @on-cancel='cancel'>
      <p>你点击了模态框哦</p>
      <p>很棒哦</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: false
    }
  },
  computed: {
    count () {
      return this.$store.getters.getCount
    }
  },
  methods: {
    incre () {
      this.$store.dispatch('doubleCount', {count: 10})
      this.showModal = true
    },
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
