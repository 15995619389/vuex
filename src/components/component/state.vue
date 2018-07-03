<template>
  <div class="hello">

    <strong>读取state访问状态对象三种方法</strong><br/>
    <strong>方法1.利用计算属性</strong><br/>
    <strong>方法2.利用mapState</strong><br/>
    <strong>方法3：利用数组形式赋值</strong><br/>
    <!-- 方法1 -->
    <!-- <h1>{{ $store.state.count }}--{{num}}--{{number}}</h1> -->
    <!-- 方法2 -->
    <h1>{{ $store.state.count }}__{{count}}</h1>
    <h2>Essential Links</h2>
    <div>
      <button @click="$store.commit('add')">add++</button>
      <button @click="$store.commit('reduce')">minus--</button>
    </div>
  </div>
</template>

<script>


// 引入vuex下的状态管理
import store from '@/store/store'
// 赋值方法2.利用mapState
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    } 
  },

  // 方法1.利用计算属性
  // computed:{ 
  //   num(){
  //     return this.$store.state.count;
  //   }
  // },


  // 方法2.利用vuex的mapState属性
  // computed:mapState({
  //   // 这里面的值必须是store.js下的state状态值变量
  //   count:state =>state.count
  // }),


  // 方法3：利用数组形式赋值
  computed:mapState(['count']),
  methods:{

  },
  store
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
