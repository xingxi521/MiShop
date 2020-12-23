import axios from 'axios'
import qs from 'querystring'
//创建axios实例
const instace = axios.create({
    timeout:5000
});

instace.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//设置拦截器
instace.interceptors.request.use(config=>{
    if(config.method === 'post'){
        config.data = config.data;
    }
    return config;
},error=>{
    return Promise.reject(error);
});
//设置请求成功后的拦截器
const errorHandler = (status,msg)=>{
    switch(status){
        case 400:
            console.log("请求语法有问题，服务器无法识别");
            break;
        case 401:
            console.log("客户端未授权该请求。缺乏有效的身份认证凭证");
            break;
        case 403:
            console.log("服务器拒绝响应。权限不足");
            break;
        case 404:
            console.log("URL无效或者URL有效但是没有资源");
            break;
        default:
            console.log(msg);
            break;
    }
}
instace.interceptors.response.use(res=>{
    if(res.status == 200){
        return res.data;
    }else{
        return Promise.reject(res);
    }
},error=>{
    const {response} = error;
    if(response){
        errorHandler(response.status,response.data);
        return Promise.reject(error);
    }else{
        console.log('网络连接中断！');
    }
});

export default instace