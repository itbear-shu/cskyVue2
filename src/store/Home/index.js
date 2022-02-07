//该文件为home仓库
//准备actions对象——响应组件中用户的动作
import {reqCategoryList} from "@/api"

const actions = {
    async categoryList(context) {
        //获取promise对象的值
        let result = await reqCategoryList()
        if (result.data.code === 200) {
            context.commit('CATEGORYLIST', result.data.data)
        }
    }
}
//准备mutations对象——修改state中的数据的唯一手段
const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value
    }
}
//准备state对象——保存具体的数据
const state = {
    //服务器返回数据，就定义为数组
    categoryList: []
}
//准备getters对象
const getters = {}

export const home =  {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}