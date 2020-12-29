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
    },
    //获取单个商品数据
    getOnlyProduct(id){
        return axios.get(baseUrl.host+baseUrl.products+"/"+id);
    },
    //添加购物车
    postBuyCar(params){
        return axios.post(baseUrl.host+baseUrl.addBuyCar,params);
    },
    //获取购物车列表数据
    getBuyCarList(){
        return axios.get(baseUrl.host+baseUrl.buyCarList);
    },
    //购物车全选中
    putselectAll(){
        return axios.put(baseUrl.host+baseUrl.selectAll);
    },
    //购物车全不选中
    putunSelectAll(){
        return axios.put(baseUrl.host+baseUrl.unSelectAll);
    },
    //购物车数量/选中更新
    putUpdateCar(id,params){
        return axios.put(baseUrl.host+baseUrl.updateCar+"/"+id,params);
    },
    //删除购物车商品
    delCarData(id){
        return axios.delete(baseUrl.host+baseUrl.delCarData+"/"+id);
    },
    //退出登陆
    postLogOut(){
        return axios.post(baseUrl.host+baseUrl.logOut);
    },
    //收货地址列表
    getShippings(){
        return axios.get(baseUrl.host+baseUrl.shippings);
    },
    //删除收货地址
    delShippings(id){
        return axios.delete(baseUrl.host+baseUrl.delShippings+"/"+id);
    },
    //添加收货地址
    addShippings(params){
        return axios.post(baseUrl.host+baseUrl.addShippings,params);
    },
    //修改收货地址
    updateShippings(id,params){
        return axios.put(baseUrl.host+baseUrl.updateShippings+"/"+id,params);
    },
    //创建订单接口
    postCreateOrders(params){
        return axios.post(baseUrl.host+baseUrl.createOrders,params);
    },
    //单个订单详情接口
    getOrdersDetail(id){
        return axios.get(baseUrl.host+baseUrl.ordersDetail+"/"+id);
    },
    //支付接口
    postPay(params){
        return axios.post(baseUrl.host+baseUrl.pay,params);
    },
    //注册账号接口
    postRegister(params){
        return axios.post(baseUrl.host+baseUrl.register,params);
    },
    //获取所有订单列表
    getOrderList(params){
        return axios.get(baseUrl.host+baseUrl.orderList,{
            params
        });
    }
}
export default api