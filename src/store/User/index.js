import {reqGetCode} from '@/api'
import {reqRegister} from '@/api'
import {reqLogin} from '@/api'
import {reqGetUserInfo} from '@/api'
import {reqLogout} from '@/api'

import {getToken, setToken, rmToken} from "@/utils/token"

const actions = {
	async getCode({commit}, phoneNum) {
		let result = await reqGetCode(phoneNum)
		if (result.status === 200) {
			commit('GETCODE', result.data)
		}
	},
	async register(context, user) {
		let result = await reqRegister(user)
		if (result.status === 200) {
			return true
		} else {
			return Promise.reject(new Error('FailToRegister..'))
		}
	},
	async login(context, data) {
		let result = await reqLogin(data)
		if (result.status === 200 && result.data.data !== null) {
			context.commit('LOGIN', result.data.data.token)
			setToken(result.data.data.token)
			return true
		} else {
			return false
		}
	},
	async getUserInfo({commit}) {
		let result = await reqGetUserInfo()
		if (result.data.code === 200) {
			commit('GETUSERINFO', result.data)
			return true
		} else {
			return Promise.reject(new Error('FailToGetUserInfo'))
		}
	},
	async logout({commit}) {
		let result = await reqLogout()
		if (result.status === 200) {
			commit('CLEAR')
			return true
		}
	}
}
const mutations = {
	GETCODE(state, result) {
		state.checkCode = result.data
	},
	LOGIN(state, token) {
		state.token = token || ''
	},
	GETUSERINFO(state, userInfo) {
		state.userInfo = userInfo.data || {}
	},
	CLEAR(state) {
		state.token = ''
		rmToken()
		state.userInfo = {}
	}
}
const state = {
	checkCode: '',
	token: getToken(),
	userInfo: {}
}
const getters = {}

export const user = {
	namespaced: true,
	actions,
	mutations,
	state,
	getters
}