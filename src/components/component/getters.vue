<template>
    <div class="getters">
        <strong>getters:vuex计算过滤操作</strong>
        <div>
            <p>{{count}}--{{number}}</p>
            <!-- add:方法名 -->
            <button @click="$store.commit('add',10)">加+</button>
            <!-- 简化为： reduce-->
            <button @click="reduce">减-</button>
        </div>
    </div>
</template>
<script>
import store from '@/store/getters'
import { mapState,mapMutations,mapGetters } from 'vuex'
    export default{
        name:'mutations',
        data(){
            return{

            }
        },
        // es6:扩展运算符
        computed:{
            ...mapState(['count']),
            ...mapGetters(['number'])
        },
        methods:mapMutations(['add','reduce']),
        store
    }
</script>
<style scoped>

</style>
