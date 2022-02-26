//配置路由文件
import Vue from 'vue'
import VueRouter from "vue-router"
import store from '@/store'
//使用创建
Vue.use(VueRouter)

// vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

//配置路由
let router = new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home/Home'),
            meta: {
                isShowHeader: true
            }
        },
        {
            path: '/login',
            component: () => import('@/pages/Login/Login'),
            meta: {
                isShowHeader: true
            }
        },
        {
            path: '/register',
            component: () => import('@/pages/Register/Register'),
            meta: {
                isShowHeader: false
            }
        },
        {
            name: 'timeLine',
            path: '/timeLine',
            component: () => import('@/pages/TimeLine/TimeLine'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'article',
            path: '/article',
            component: () => import('@/pages/Article/Article'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'schoolList',
            path: '/schoolList',
            component: () => import('@/pages/SchoolList/SchoolList'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'upload',
            path: '/upload',
            component: () => import('@/pages/Upload/Upload'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'teacherDetail',
            path: '/teacherDetail',
            component: () => import('@/pages/TeacherDetail/TeacherDetail'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'md',
            path: '/md',
            component: () => import('@/pages/MarkDownEditor/index'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'schoolDetail',
            path: '/schoolDetail',
            component: () => import('@/pages/SchoolDetail/SchoolDetail'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'scoreLine',
            path: '/scoreLine',
            component: () => import('@/pages/ScoreLineList/ScoreLine/ScoreLine'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'examQuestion',
            path: '/examQuestion',
            component: () => import('@/pages/ExamQuestion/ExamQuestion'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: 'scoreLineList',
            path: '/scoreLineList',
            component: () => import('@/pages/ScoreLineList/ScoreLineList'),
            meta: {
                isShowHeader: true
            }
        },
        {
            name: '404',
            path: '/404',
            component: () => import('@/pages/404/NotFound'),
            meta: {
                isShowHeader: false
            }
        },
        //配置重定向：项目开始运行时立马定向到首页
        {
            path: '*',
            redirect: '/404'
        }
    ],
    //进行路由跳转时重新回到顶上
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return {x: 0, y: 0}
    }
})
import {getToken} from "@/utils/token"
//配置全局前置路由守卫
router.beforeEach(async (to, from, next) => {
    if (getToken()) {
        //用户登录了还想去login组件
        if (to.path === '/login') {
            Vue.prototype.$message.warning({
                duration: 1000,
                message: '已经登录，不能再重复登录~'
            })
            next(from.path)
        } else {
            //判断
            if (store.state.user.userInfo.username) {
                next()
            } else {
                //用户登录后获取用户信息
                try {
                    const result = await store.dispatch('user/getUserInfo')
                    if (result) {
                        next()
                    }
                } catch (e) {
                    //token异常了，就清除token
                    await store.dispatch('user/logout')
                    console.log(e.message)
                    next('/login')
                }
            }
        }
    } else {
        //未登录状态下
        if (to.path.indexOf('/md') !== -1) {
            Vue.prototype.$message.warning({
                duration: 1000,
                message: '当前尚未登录，请先登录'
            })
            next('/login?redirect=' + to.path)
        } else {
            next()
        }
    }
})


//暴露router
export default router
