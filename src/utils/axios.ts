// eslint-disable-next-line import/no-extraneous-dependencies
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Axios from 'axios'

const baseURL = 'https://api.github.com'

const axiosInit = Axios.create({
  baseURL,
  timeout: 3000 // 请求超时 3s
})

// 前置拦截器（发起请求之前的拦截）
axiosInit.interceptors.request.use(
  (response: Object) => response,
  /**
   * 根据你的项目实际情况来对 config 做处理
   * 这里对 config 不做任何处理，直接返回
   */
  (error: Object) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axiosInit.interceptors.response.use(
  (response: Object) => response,
  /**
   * 根据你的项目实际情况来对 response 和 error 做处理
   * 这里对 response 和 error 不做任何处理，直接返回
   */
  (error: Object) => Promise.reject(error)
  // if (error.response && error.response.data) {
  //   const code = error.response.status;
  //   const msg = error.response.data.message;
  //   console.error('[Axios Error]', error.response);
  // } else {
  // }
)

export default axiosInit
