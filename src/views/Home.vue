<template lang='jade'>
.home
  h1 这是主页
  lr-dialog
</template>

<script>
import LRdialog from '@/components/LRdialog'
export default {
  name: 'Home',
  data () {
    return {
      myTheme: 'light'
    }
  },
  components: {
    'lr-dialog': LRdialog
  }
}
</script>

<style lang="sass" scoped>
h1
  color: red
h2
  color: blue
</style>

