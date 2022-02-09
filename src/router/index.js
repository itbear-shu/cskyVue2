//配置路由文件
import Vue from 'vue'
import VueRouter from "vue-router"
import store from '@/store'
//使用创建
Vue.use(VueRouter)

//引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder/MyOrder"
import GroupOrder from "@/pages/Center/GroupOrder/GroupOrder"

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
			component: ()=>import('@/pages/Home/Home'),
		},
		{
			path: '/login',
			component: ()=>import('@/pages/Login/Login'),
		},
		{
			path: '/register',
			component: ()=>import('@/pages/Register/Register'),
		},
		{
			name: 'search',
			path: '/search/:keyWord?',
			component: ()=>import('@/pages/Search/Search'),
		},
		{
			name: 'article',
			path: '/article',
			component: ()=>import('@/pages/Article/index'),
		},
		{
			name: 'schoolList',
			path: '/schoolList',
			component: ()=>import('@/pages/SchoolList/SchoolList'),
		},
		{
			name: 'teacherDetail',
			path: '/teacherDetail',
			component: ()=>import('@/pages/TeacherDetail/index'),
		},
		{
			name: 'md',
			path: '/md',
			component: ()=>import('@/pages/MarkDownEditor/index'),
		},
		{
			name: 'schoolDetail',
			path: '/schoolDetail',
			component: ()=>import('@/pages/SchoolDetail/SchoolDetail'),
		},
		{
			name: 'center',
			path: '/center',
			component: ()=>import('@/pages/Center/Center'),
			children: [
				{
					path: 'myorder',
					component: MyOrder
				},
				{
					path: 'grouporder',
					component: GroupOrder
				},
				//配置重定向：进入center时默认进入myorder页面
				{
					path: '/center',
					redirect: '/center/myorder'
				}
			]
		},
		//配置重定向：项目开始运行时立马定向到首页
		{
			path: '*',
			redirect: '/home'
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
//配置全局前置路由守卫
router.beforeEach(async (to, from, next) => {
	if (store.state.user.token) {
		//用户登录了还想取login组件
		if (to.path === '/login')
			next('/home')
		else
		{
			//判断
			if (store.state.user.userInfo.name) {
				next()
			} else {
				//用户登录后获取用户信息
				try {
					let result = await store.dispatch('user/getUserInfo')
					if (result) {
						next()
					}
				} catch (e) {
					//token异常了，就清除token
					store.dispatch('user/logout')
					console.log(e.message)
					next('/login')
				}
			}
		}
	} else {
		//未登录状态下
		if (to.path.indexOf('/center') !== -1) {
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
