//该文件为search仓库
//准备actions对象——响应组件中用户的动作
import {reqList} from "@/api"

const actions = {
    async getSearchInfo({commit}, params = {}) {
        //获取promise对象的值
        let result = await reqList(params)
        if (result.status === 200) {
            commit('GETSEARCHINFO', result.data)
        }
    }
}
//准备mutations对象——修改state中的数据的唯一手段
const mutations = {
    GETSEARCHINFO(state, value) {
        // console.log('数据更新了')
        state.searchList = value.data
    }
}
//准备state对象——保存具体的数据
const state = {
    //服务器返回数据，就定义为数组
    searchList: {}
}
//准备getters对象：计算属性，简化仓库中的数据
const getters = {
    attrsList(state) {
        //防止返回undefined时遍历出错
        return state.searchList.attrsList || []
    },
    goodsList(state){
        return state.searchList.goodsList || []
    },
    pageNo(state){
        return state.searchList.pageNo || 1
    },
    pageSize(state){
        return state.searchList.pageSize || 10
    },
    total(state){
        return state.searchList.total || 0
    },
    totalPages(state){
        return state.searchList.totalPages || 0
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}

export const search = {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}