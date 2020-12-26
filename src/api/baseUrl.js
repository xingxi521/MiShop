const baseUrl = {
    host:'/api',
    products:'/products',//获取产品
    login:'/user/login',//登陆接口
    userRequest:'/user',//拉取用户信息
    carCount:'/carts/products/sum',//拉取用户信息
    addBuyCar:'/carts',//添加购物车
    buyCarList:'/carts',//获取购物车列表
    selectAll:'/carts/selectAll',//购物车全选中
    unSelectAll:'/carts/unSelectAll',//购物车全不选中
    updateCar:'/carts',//更新购物车数量/选中状态
    delCarData:'/carts',//删除购物车数据
    logOut:'/user/logout',//退出登陆接口
    shippings:'/shippings',//获取收货地址列表
    delShippings:'/shippings',//删除收货地址
    addShippings:'/shippings',//添加收货地址
    updateShippings:'/shippings',//更新收货地址
}
export default baseUrl