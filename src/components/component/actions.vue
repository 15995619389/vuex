<template>
    <div class="actions">
        <strong>actions:vuex异步修改状态</strong>
        <div>
            <p>{{count}}--{{number}}</p>
            <!-- add:方法名 -->
            <button @click="$store.commit('add',10)">加+</button>
            <!-- 简化为： reduce-->
            <button @click="reduce">减-</button>
        </div>
        <div>
            <button @click="addActions">++</button>
            <button @click="reduceActions">--</button>
        </div>
    </div>
</template>
<script>
import store from '@/store/actions'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
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
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addActions','reduceActions'])
        },
        store
    }
</script>
<style scoped>

</style>
