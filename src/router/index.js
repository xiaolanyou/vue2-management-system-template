//1.导入vue 和 vuerouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//2.调用vue.use() 函数，把 VueRouter 安装为 Vue 的插件
//vue.use()函数的作用，就是来安装插件的
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),// 懒加载
    },
];

//3.创建路由的实例对象
const router = new VueRouter({
    routes
})

//4.向外共享路由的实例对象
export default router