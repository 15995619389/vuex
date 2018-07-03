<template>
    <div class="he">
        <!-- 父传子 -->
        <header>{{logo}}</header>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.li}}</li>
        </ul>
        <!-- 子传父 -->
        <input  @change="inputText" v-model="username"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {li:"主页"},
                {li:"主页2"},
                {li:"主页3"},
                {li:"主页4"},
                {li:"主页5"}
            ],
            username:''
        }
    },
    // 父传子
    // 1.子组件内部使用props来接受父组件传过来的值
    // props:['logo'],

    // 2.定义能接收的数据类型
    props:{
        logo:{
            type:String, //指定传入的类型
            default:'' ///可以指定默认的值
        }
    },

    // 子传父
    methods:{
        // 需要自定义事件，使用$emit向父组件传递值
        inputText:function(){
            this.$emit('getText',this.username)
        }
    }
    
}
</script>
<style scoped>

</style>
