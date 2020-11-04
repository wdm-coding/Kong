// 封装get请求

// 引入请求拦截器
import service from "@/util/request.js"
// 导出疯转的请求函数
export function requestData(url){  //import {requestData} from "@/api/homeapi.js"
    // 函数返回promise对象
    return new Promise((resolve,reject)=>{
        // 使用拦截器的请求发送请求
       service.request({
           url,
           method:"get"
       }).then((ok)=>{
        //    请求成功时调用promise对象的resolve方法
           resolve(ok)
       }).catch((err)=>{
           //    请求失败时调用promise对象的reject方法
           reject(err)
       })
    })
}
export function getMap(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/api/ws/district/v1/list?key=JYEBZ-SKRKO-TOBWX-SICPT-QIHRK-7WBLE",
            method:"get"
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}