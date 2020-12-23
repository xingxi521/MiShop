import axios from '../utils/http'
import baseUrl from './baseUrl'
const api = {
    //产品搜索及动态排序List
    getProducts(params){
        return axios.get(baseUrl.host+baseUrl.products,{
            params
        });
    },
    //登陆接口
    getLogin(params){
        return axios.post(baseUrl.host+baseUrl.login,params);
    },
    //拉取用户信息
    getUserData(){
        return axios.get(baseUrl.host+baseUrl.userRequest);
    },
    //拉取购物车数量
    getCarCount(){
        return axios.get(baseUrl.host+baseUrl.carCount);
    }
}
export default api