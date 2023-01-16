import axios from 'axios'

const request = axios.create({
  baseURL: '', // 请求的公共地址部分
  timeout: 3000 // 请求超时时间 当请求时间超过5秒还未取得结果时 提示用户请求超时
})

// interceptors axios的拦截器对象
request.interceptors.request.use(config => {
  // config 请求的信息
  return config // 将配置完成的config对象返回出去 如果不返回 请求则不会进行
}, err => {
  // 请求发生错误时的处理 抛出错误
  Promise.reject(err)
})

export default request
