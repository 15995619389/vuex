import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = { //共享状态state  共用的数据
    count:8
}

const mutations = {  //改变数据     要改变state的数值的方法，必须写在mutations里
    add:(state,n) => state.count+=10,  //传参的形式  第一个是默认值state
    reduce:state => state.count--
}

const getters = {
    number:state => state.count+=100
}

const actions = {
    addActions(context){ //上下文对象
        context.commit('add',3)
        setTimeout(() =>{context.commit('reduce')},2000)
    },
    reduceActions({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({ //用export default 封装代码，让外部可以引用。
    state,mutations,getters,actions
})