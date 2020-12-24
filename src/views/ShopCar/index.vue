<template>
    <div class="shopcar-main">
        <ShopCarHeader/>
        <div class="shopcar-wrap">
            <div class="container">
                <div class="car-table">
                    <ul class="car-tab-head">
                        <li class="flex-col-1">
                            <span class="icon-selectall" :class="{'selected':selectedAll}" @click="selectAllHandler"></span>
                            全选
                        </li>
                        <li class="flex-col-3">商品名称</li>
                        <li class="flex-col-1">单价</li>
                        <li class="flex-col-2">数量</li>
                        <li class="flex-col-1">小计</li>
                        <li class="flex-col-1">操作</li>
                    </ul>
                    <ul class="car-list">
                        <li class="list-item" v-for="(item,index) in listData" :key="index">
                            <div class="item-check">
                                <span class="select-ico" :class="{'selected':item.productSelected}" @click="updateData(item)"></span>
                            </div>
                            <div class="item-name">
                                <img v-lazy="item.productMainImage" alt="">
                                <span>{{item.productSubtitle}}</span>
                            </div>
                            <div class="item-price">{{item.productPrice}}</div>
                            <div class="item-num">
                                <div class="num-box">
                                    <a href="javascript:;" @click="updateData(item,'-')">-</a>
                                    <span>{{item.quantity}}</span>
                                    <a href="javascript:;" @click="updateData(item,'+')">+</a>
                                </div>
                            </div>
                            <div class="item-total">{{item.productTotalPrice}}</div>
                            <div class="item-del" @click="delDataHandler"></div>
                            <modal 
                            title="提示" 
                            :btnType="2" 
                            sureText="确定删除此商品" 
                            :showModal="showModal" 
                            @closeHandler="closeHandler" 
                            @submitHandler="submitHandler(item.productId)" 
                            @cancelHandler="cancelHandler"
                            >
                                <template v-slot:body>
                                    <p>请问您是否要确定删除该商品？</p>
                                </template>
                            </modal>
                        </li>
                    </ul>
                </div>
                <div class="car-bottom">
                    <div class="bottom-left">
                        共<span>{{totalShopNum}}</span>件商品，已选择<span>{{selectNum}}</span>件
                    </div>
                    <div class="bottom-right">
                        合计:<span>{{totalPrice}}元</span>
                        <button class="settlementBtn">去结算</button>
                    </div>
                </div>
            </div>
        </div>
        <ServerBar/>
        <Footer/>
        
    </div>
</template>
<script>
import ShopCarHeader from '../../components/ShopCarHander'
import Footer from '../../components/Footer'
import ServerBar from '../../components/ServerBar'
import Modal from '../../components/Modal'
export default {
    name:'ShopCar',
    components:{
        ShopCarHeader,
        Footer,
        ServerBar,
        Modal
    },
    data(){
        return{
            listData:[],//购物车列表数据
            totalPrice:0,//总结算价格
            totalShopNum:0,//总商品数据
            selectNum:0,//已经选中的数量
            selectedAll:false,//是否全选
            showModal:false
        }
    },
    mounted() {
        this.$api.getBuyCarList().then(res=>{
            if(res.status == 0){
                this.renderData(res);
            }else{
                this.$router.push('/login');
            }
        });
    },
    methods:{
        //全选与非全选事件
        selectAllHandler(){
            if(this.selectedAll){
                this.$api.putunSelectAll().then(res=>{
                    if(res.status == 0){
                        this.renderData(res);
                    }else{
                        this.$router.push('/login');
                    }
                });
            }else{
                this.$api.putselectAll().then(res=>{
                    if(res.status == 0){
                        this.renderData(res);
                    }else{
                        this.$router.push('/login');
                    }
                });
            }
        },
        //数据更新
        renderData(res){
            this.listData = res.data.cartProductVoList;
            this.totalPrice = res.data.cartTotalPrice;
            this.totalShopNum = res.data.cartTotalQuantity;
            this.selectedAll = res.data.selectedAll;
            this.selectNum = this.listData.filter(item=>item.productSelected).length;
        },
        //增加/减少/选中方法
        updateData(item,type){
            let count = item.quantity;
            let productSelected = item.productSelected;
            if(type == "+"){
                if(count > item.productStock){
                    alert('商品数量已超出库存');
                    return;
                }
                ++count;
            }else if(type == "-"){
                if(count <= 1){
                    alert('至少需要一个数量');
                    return;
                }
                --count;
            }else{
                productSelected = !productSelected;
            }
            this.$api.putUpdateCar(item.productId,{
                quantity:count,
                selected: productSelected
            }).then(res=>{
                if(res.status == 0){
                    this.renderData(res);
                }else{
                    this.$router.push('/login');
                }
            });
        },
        //删除商品
        delDataHandler(){
            this.showModal = true;
        },
        //模态框关闭事件
        closeHandler(){
            this.showModal = false;
        },
        //模态框取消事件
        cancelHandler(){
            this.showModal = false;
        },
        //模态框提交事件
        submitHandler(id){
            this.$api.delCarData(id).then(res=>{
                if(res.status == 0){
                    this.renderData(res);
                    this.showModal = false;
                }else{
                    this.$router.push('/login');
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/mixin.less");
    .shopcar-main{
        .shopcar-wrap{
            background-color: @colorJ;
            padding-top: 30px;
            padding-bottom: 114px;
            .container{
                .car-table{
                    background-color: @colorG;
                    font-size: 14px;
                    color: @colorD;
                    text-align: center;
                    .car-tab-head{
                        display: flex;
                        height: 79px;
                        line-height: 79px;
                        .icon-selectall{
                            display: inline-block;
                            width: 22px;
                            height: 22px;
                            border: 1px solid #e5e5e5;
                            vertical-align: middle;
                            margin-right: 17px;
                            cursor: pointer;
                            &.selected{
                                background: url(/imgs/icon-gou.png) @colorA no-repeat 50%;
                                background-size: 16px 12px;
                                border: none;
                            }
                        }
                        .flex-col-1{
                            flex: 1;
                        }
                        .flex-col-3{
                            flex: 3;
                        }
                        .flex-col-2{
                            flex: 2;
                        }
                    }
                    .car-list{
                        .list-item{
                            display: flex;
                            align-items: center;
                            height: 125px;
                            border-top: 1px solid @colorH;
                            font-size: @fontI;
                            .item-check{
                                flex: 1;
                                .select-ico{
                                    display: inline-block;
                                    width: 22px;
                                    height: 22px;
                                    border: 1px solid #e5e5e5;
                                    vertical-align: middle;
                                    margin-right: 17px;
                                    cursor: pointer;
                                    &.selected{
                                        background: url(/imgs/icon-gou.png) @colorA no-repeat 50%;
                                        background-size: 16px 12px;
                                        border: none;
                                    }
                                }
                            }
                            .item-name{
                                flex: 3;
                                img{
                                    width: 80px;
                                    height: 80px;
                                    vertical-align: middle;
                                }
                                span{
                                    font-size: @fontI;
                                    color:@colorB;
                                    margin-left: 30px;
                                }
                            }
                            .item-price{
                                flex: 1;
                                color:@colorB;
                            }
                            .item-num{
                                flex: 2;
                                .num-box{
                                    display: inline-block;
                                    width: 150px;
                                    height: 40px;
                                    line-height: 40px;
                                    border: 1px solid #e5e5e5;
                                    font-size: 14px;
                                    a,span{
                                        display: inline-block;
                                        width: 50px;
                                        color: @colorB;
                                    }
                                }
                            }
                            .item-total{
                                flex: 1;
                                color: @colorA;
                            }
                            .item-del{
                                flex: 1;
                                .iconSet(15px,15px,'/imgs/icon-close.png');
                                cursor: pointer;
                            }
                        }
                    }
                }
                .car-bottom{
                    display: flex;
                    justify-content: space-between;
                    font-size: @fontJ;
                    color: @colorC;
                    margin-top: 20px;
                    height: 50px;
                    line-height: 50px;
                    .bottom-left{
                        font-size: @fontJ;
                        margin-left: 20px;
                        span{
                            color: @colorA;
                            margin: 0 5px;
                        }
                    }
                    .bottom-right{
                        color: @colorA;
                        span{
                            font-size: @fontI
                        }
                        .settlementBtn{
                            .btnSet(202px,50px);
                            font-size: @fontI;
                            margin-left: 15px;
                        }
                    }
                }
            }
        }
    }
</style>