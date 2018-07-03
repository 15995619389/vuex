<template>
    <div class="mutations">
        <strong>mutations:vuex修改状态</strong>
        <div>
            <p>{{count}}</p>
            <!-- add:方法名 -->
            <button @click="$store.commit('add',10)">加+</button>
            <!-- <button @click="$store.commit('reduce')">减-</button> -->
            <!-- 简化为： reduce-->
            <button @click="reduce">减-</button>
        </div>
    </div>
</template>
<script>
import store from '@/store/mutations'
import { mapState,mapMutations } from 'vuex'
    export default{
        name:'mutations',
        data(){
            return{

            }
        },
        computed:mapState(['count']),
        methods:mapMutations(['add','reduce']),
        store
    }
</script>
<style scoped>

</style>
