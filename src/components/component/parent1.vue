<template>
    <div class="parent1">
        <input v-model="msg" @change="parent1">
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'我是parent的兄弟组件'
        }
    },
    methods:{
        parent1:function(){
            
        }
    }    
}
</script>
<style>

</style>
