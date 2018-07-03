<template>
    <div>
        <strong>{{msg}}</strong>
        <button @click="btn">++++</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'children1.vue组件'
        }
    },
    methods:{
        btn:function(){
            console.log(this.msg)
            this.$emit("alter2",this.msg)
        }
    }

}
</script>
<style>

</style>
