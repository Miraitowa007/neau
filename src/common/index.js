/*
 * @Author: ShiJInMing
 * @Date: 2021-04-28 16:34:49
 * @LastEditors: ShiJInMing
 * @LastEditTime: 2021-04-28 17:08:50
 */
import axios from 'axios'
// import router from 'src/router'
import { server_base_url } from '../../src/config/index'

//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
    return res;
}, function (error) {
  let data = error.response.data;
  if (data.code == 20001) {
    let currentUrl = window.location.href;
    window.location = data.data.loginUrl + '?returnUrl=' + currentUrl;

  } else {
    return Promise.reject(error);
  }
})
export default function fetch(options) {
    return new Promise((resolve, reject) => {
        let arrHeader
        arrHeader = { 'Content-Type': 'application/json;charset=utf-8' }
        //创建一个axios实例
        const instance = axios.create({
        //设置默认根地址
        // baseURL: process.env.VUE_APP_BASE_API,
        baseURL: server_base_url,
        //设置请求超时设置
        timeout: 30000,
        //设置请求时的header
        headers: arrHeader,
        //允许跨域携带cookie
        withCredentials: true
        })

        //请求处理
        instance(options)
        .then((res) => {
            //请求成功时,根据业务判断状态
            if (res.data) {
            resolve(res.data)
            return false
            }
            else {
            resolve(res.data);
            return false
            }
        })
        .catch((error) => {
            //请求失败时,根据业务判断状态
            if (error.response) {
            if (error.response.status === 401) {
                // let currentUrl = encodeURIComponent(window.location.href)
                window.location = 'http://idssa.jd.com/sso/login?' + 'ReturnUrl=' + 'http://oper.jd.id'
            }
            reject(error.data)
            }
        })
    })
}
