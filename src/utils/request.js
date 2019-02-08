import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: 'http://localhost:3000', // api 的 base_url
    headers: {       
    },
    timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        // if (store.getters.token) {
        //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        //   config.headers['X-Token'] = getToken()
        // }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => response,
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    // response => {
    //     const res = response.data
    //     if (res.code !== 20000) {
    //         Message({
    //             message: res.message,
    //             type: 'error',
    //             duration: 5 * 1000
    //         })
    //         // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //         if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //             // 请自行在引入 MessageBox
    //             // import { Message, MessageBox } from 'element-ui'
    //             MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //             confirmButtonText: '重新登录',
    //             cancelButtonText: '取消',
    //             type: 'warning'
    //             }).then(() => {
    //             store.dispatch('FedLogOut').then(() => {
    //                 location.reload() // 为了重新实例化vue-router对象 避免bug
    //             })
    //             })
    //         }
    //         return Promise.reject('error')
    //     } else {
    //         return response.data
    //     }
    // },
    err => {
        console.log('err' + err) // for debug
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }
        return Promise.reject(err)
    }
)

export default service