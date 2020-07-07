import Vue from 'vue'
import VueRouter from 'vue-router'
import loginComponent from './src/core/login'
import homeComponent from './src/core/home'
import * as sharedComponents from './src/shared/components'
import * as sharedServices from './src/shared/services'

Vue.use(VueRouter)

//解决vue-router 当新路由与旧路由相同时控制台打印错误信息
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}



const getHomeChildrenRoutes=function(){
      const arr=['dashboard','workorder'];
      //request 代表webpack打包的时候请求的chunk
      let children = arr.map((item)=>{
          return {
              name:item,
              path:item,
              component:()=>import(/* webpackChunkName: "[request]" */ `./src/features/${item}/index.js`)
          }
      })
      return children
}


const router = new VueRouter({
    mode:'hash',
    bash:'/',
    routes:[
        { path: '/', 
          redirect: { name: 'login' }
        },
        {
            name: 'login',
            path: '/login',
            component: loginComponent
        },
        {
            name:'home',
            path:'/home',
            component:homeComponent,
            children:getHomeChildrenRoutes()
        }
    ]
})

const registerSharedComponentsToGlobal=function(sharedComponents){
    for(let componentKey in sharedComponents){
        Vue.component(sharedComponents[componentKey].name,sharedComponents[componentKey])
    }
}

Vue.prototype.$productName='test-module-demo'
registerSharedComponentsToGlobal(sharedComponents)


const app = new Vue({
    router
  }).$mount('#root')
