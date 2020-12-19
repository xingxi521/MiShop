import axios from '../utils/http'
import baseUrl from './baseUrl'
const api = {
    //产品搜索及动态排序List
    getProducts(params){
        return axios.get(baseUrl.host+baseUrl.products,{
            params
        });
    }
}
export default api