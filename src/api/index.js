//该文档用于接口的统一管理

import requests from "@/api/request"
// import mockRequests from "@/api/mockRequest"

//获取验证码
export const reqGetCode = (email)=>requests({
    url: `/ec/send/${email}`,
    method: 'get'
})

//校验验证码是否正确
export const reqCheckCode = (code, eid)=>requests({
    url: `/ec/check/${code}/${eid}`,
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
    url: '/user/login',
    method: 'post',
    data
})

//用户登录后在首页获取用户信息
export const reqGetUserInfo = ()=>requests({
    url: `/user/userInfo`,
    method: 'post'
})

// 获取学校列表
export const reqGetSchoolList = (data)=>requests({
    url: '/school/list',
    method: 'post',
    data
})

// 获取某一学校具体信息
export const reqGetSchoolDetailBySid = (sid)=>requests({
    url: `/school/detail/${sid}`,
    method: 'get'
})

// 获取老师列表
export const reqGetTeacherList = (sid, currentPage)=>requests({
    url: `/teacher/briefInfo/${sid}/${currentPage}`,
    method: 'get'
})

// 老师具体信息
export const reqGetTeacherDetail = (tid)=>requests({
    url: `/teacher/detailedInfo/${tid}`,
    method: 'get'
})

// 查询文章
export const reqGetArticleById = (id)=>requests({
    url: `/article/${id}`,
    method: 'get'
})

// 查询评论
export const reqGetCommentById = (id)=>requests({
    url: `/comment/${id}`,
    method: 'get'
})

// 添加父评论
export const reqAddParentComment = (data)=>requests({
    url: '/comment/add',
    method: 'post',
    data
})

// 发帖
export const reqSaveArticle = (data)=>requests({
    url: '/article/add',
    method: 'post',
    data
})

