import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = { //共享状态state  共用的数据
    count:1
}

const mutations = {  //改变数据     要改变state的数值的方法，必须写在mutations里
    add:state => state.count++,
    reduce:state => state.count--
}



export default new Vuex.Store({ //用export default 封装代码，让外部可以引用。
    state,mutations
})