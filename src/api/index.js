//该文档用于接口的统一管理

import requests from "@/api/request"
// import mockRequests from "@/api/mockRequest"

//请求Search组件的数据，参数可有可无，但必须是一个空对象
export const reqList = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

//获取验证码
export const reqGetCode = (phone)=>requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

//注册用户
export const reqRegister = (data)=>requests({
    url: '/user/register',
    method: 'post',
    data
})

//用户登录
export const reqLogin = (data)=>requests({
    url: '/user/passport/login',
    method: 'post',
    data
})

//用户登录后在首页获取用户信息
export const reqGetUserInfo = ()=>requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

//退出登录
export const reqLogout = ()=>requests({
    url: '/user/passport/logout',
    method: 'get'
})

//获取用户的所有订单信息
export const reqGetOrderInfo = (page, limit)=>requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
})




