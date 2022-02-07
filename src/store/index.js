//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//引入home仓库
import {home} from './Home'
//引入search
import {search} from "@/store/Search"
import {user} from '@/store/User'
//对外暴露store类的一个实例对象
export default new Vuex.Store({
    modules: {
        home,
        search,
        user,
    }
})
