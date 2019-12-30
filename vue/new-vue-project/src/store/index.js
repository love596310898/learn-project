import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";

Vue.use(Vuex)

const state = {
    message: 'hello world 1',
    count: 1,
    email: '596310898@163.com'
}
const getters = {
    incrementCount(state){
      return ++state.count
    },
    jianCount(state, getters){
      return getters.incrementCount - 1 + ''
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
})

if(module.hot){
    module.hot.accept(['./mutations'], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const newMutations = require('./mutations').default
        // 加载新模块
        store.hotUpdate({
            mutations: newMutations
        })
    })
}

export default  store
