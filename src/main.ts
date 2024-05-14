import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//@ts-ignore
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'

import 'virtual:svg-icons-register'
import allGloablComponents from '@/components'
import '@/styles/index.scss'
//引入路由
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhTW
})

app.use(allGloablComponents)

//注册模板路由
app.use(router)
app.use(pinia)

// import request from '@/utils/request'
// request({
//   url: '/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111'
//   }
// })
// import { reqLogin } from './api/user'
// reqLogin({
//       username: 'admin',
//       password: '111111'
//     });

app.mount('#app')

