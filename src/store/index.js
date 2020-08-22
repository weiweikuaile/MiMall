import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);//应用
const state={//状态
    username:'',//登录用户名
    cartCount:0//购物车商品数量
}
export default new Vuex.Store({//导出
    state,
    mutations,
    actions
});
