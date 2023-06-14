import { createRouter, createWebHashHistory } from "vue-router";
import myLogin from '../components/Home/myLogin'
// import Register from '../components/Home/Register'



const routes = [

    {
        path: '/',
        name: 'Home',
        redirect: '/myLogin',
        component: myLogin
    },
	{
	    path: '/myLogin',
	    name: 'myLogin',
	    component: myLogin,
		// props(){
		// 	return{LoginStatus:true}
		// }
	},
    {
        path: '/Register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../components/Home/Register'),
		// component: Register
		// props:{
			
		// }
	},
	{
	    path: '/classroom',
	    name: 'Classroom',
	    component: () => import(/* webpackChunkName: "classroom" */ '../components/UserView/ClassRoom/classroom'),
		// component: Register
	},
	{
	    path: '/userhome',
	    name: 'Userhome',
	    component: () => import(/* webpackChunkName: "classroom" */ '../components/UserView/UserHome'),
		// component: Register
	},
	{
	    path: '/checkin',
	    name: 'Checkin',
	    component: () => import(/* webpackChunkName: "classroom" */ '../components/UserView/ClassRoom/checkin'),
		// component: Register
	},
	{
	    path: '/manage',
	    name: 'Manage',
	    component: () => import(/* webpackChunkName: "classroom" */ '../components/AdminView/ManageClassroom/manageClassroom'),
		// component: Register
	},
	{
		path:'/test',
		name:'test',
		component: () => import(/* webpackChunkName: "classroom" */ '../components/test.vue'),
	},
    // {
    //     path: '*',
    //     component: () => import('../components/Home/myLogin')
    // }

];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //路由被激活时的css状态,需要在文件中配置
  // linkActiveClass:"school-active"
  linkActiveClass:"school-active"
})

router.beforeEach((to, from, next) => {
  if (from.path == to.path && to.path !== '/myLogin') {
    // 如果当前路由不是主页面，强制跳转到主页面
    next('/myLogin')
  } else {
    // 如果当前路由是主页面，则正常进行路由切换
    next()
  }
});

export default router;