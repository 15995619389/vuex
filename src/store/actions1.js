export default{
    addNum({commit,state},id){
        // 
        commit('REMBER_ANSWER',id);
        if(state.itemNum<state.itemDatail.length){
            commit('ADD_ITEMNUM',1)
        }
    },
    // 初始化信息
    initializeData({commit}){
        commit('INITIALIZE_DATA')
    }
}