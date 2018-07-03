<template>
    <div class="home">
        <Item :father-component="home"></Item>
    </div>
</template>
<script>
import Item from '../../src/components/item'
export default {
    name:"home",
    components:{
       Item 
    }
}
</script>
<style scoped>

</style>
