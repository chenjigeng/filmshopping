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
  background-color: #fba214;
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

@for $i from 1 through 40 {
  .font-#{$i} {
    font-size: 2px * $i;
  }
}

.bold {
  font-weight: bold
}

.fl {
  float: left !important;
}
.fr {
  float: right !important;
}
.clear {
  clear: both
}
.tr {
  text-align: right !important;
}
.tl {
  text-align: left !important;
}
.tc {
  text-align: center !important;
}

.white {
  color: white;
}
.black {
  color: black;
}
.bg-white {
  background-color: white;
}
.bg-black {
  background-color: black;
}

.side-bar {
  width: 60px;
  img {
    width: 60px;
    height: 450px;
  }
}
.rank-stars {
  img {
    width: 20px;
  }
}
</style>
