<!-- yf test push -->
<template>
  <div id="app">
    <Navbar></Navbar>
    <div class='main-content'>
      <router-view></router-view>
    </div>
    <LRdialog></LRdialog>
  </div>
</template>

<script>
import Navbar from './components/Nav'
import LRdialog from '@/components/LRdialog'
export default {
  data () {
    return {
      radio: true
    }
  },
  name: 'app',
  components: {
    Navbar,
    LRdialog
  }
}
</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
}
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  
#test {
  color: red
}
  
.main-content {
  margin: 40px
}
  
a {
  text-decoration: none;
}

// 定义原子类
@for $i from 1 through 20 {
  .p-#{5*$i} {
    padding: 5px * $i;
  }
  .pl-#{5*$i} {
    padding-left: 5px * $i;
  }
  .pr-#{5*$i} {
    padding-right: 5px * $i;
  }
  .pt-#{5*$i} {
    padding-top: 5px * $i;
  }
  .pb-#{5*$i} {
    padding-bottom: 5px * $i;
  }
  .m-#{5*$i} {
    margin: 5px * $i;
  }
  .ml-#{5*$i} {
    margin-left: 5px * $i;
  }
  .mr-#{5*$i} {
    margin-right: 5px * $i;
  }
  .mb-#{5*$i} {
    margin-bottom: 5px * $i;
  }
  .mt-#{5*$i} {
    margin-top: 5px * $i;
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tr {
  text-align: right;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
</style>
