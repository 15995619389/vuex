<template>
    <div class="parent">
       <div class="children">
           <p> {{msg}}</p>
            <Children :logo="logotext" @getText="getUser"></Children>
        
            <p>获取子组件的username：{{parentUserName}}</p>
       </div>
       <div class="children1">
           <Children1 ref="alert2"></Children1>
           <button @click="btn()">oooooooo</button>
       </div>
    </div>
</template>
<script>
import Children from "../pages/children.vue";
import Children1 from "../pages/children1.vue";
export default {
  data() {
    return {
      msg: "我是父组件",
      logotext: "我是父组件传过来的文本",
      parentUserName: ""
    };
  },
  components: {
    Children,
    Children1
  },
  methods: {
    //msg参数：获取子组件传递过来的数据值  定义一个带参数的方法，调用时，让本组件的数据等于传递过来的参数，事件数据传递
    getUser: function(msg) {
      this.parentUserName = msg;
    },
    btn(){
        this.$refs.alert2.btn()
    }
  }
};
</script>
<style scoped>
</style>
