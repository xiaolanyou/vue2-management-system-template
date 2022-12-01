import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'

const instance = axios.create({
  // baseURL: '/api',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true // 允许携带cookie
})


// 请求拦截器
// 设置(如果已经跳转到下一个路由了,就取消上一个路由未请求完成的接口)
window._axiosPromiseArr = []
instance.interceptors.request.use(
  function (config) {
    nprogress.start()

    // 设置(如果已经跳转到下一个路由了,就取消上一个路由的请求)
    config.cancelToken = new axios.CancelToken(cancel => {
      window._axiosPromiseArr.push({ cancel })
    })

    // 开始
    /* const cookie = sessionStorage.getItem('cookie')
    if (cookie) {
      // 注意：config.method 的判断值必须是小写的post和get
      if (config.method === 'post') {
        config.data = {
          cookie: cookie,  // 将cookie参数默认放在请求参数里
          ...config.data
        }
      } else if (config.method === 'get') {
        config.params = {
          cookie: cookie,  // 将cookie参数默认放在请求参数里
          ...config.params
        }
      }
    } */
    // 结束
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    nprogress.done()
    return response.data ? response.data : ''
  },
  function (error) {
    nprogress.done()
    // return Promise.reject(error)
    // console.log(error);
    // Message.warning(error.message)
    if (error.response) Message.warning(error.response.data.message || error.response.data.msg || error || '');
    return new Promise(() => { })
  }
)
export default instance
