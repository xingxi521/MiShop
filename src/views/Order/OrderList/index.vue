<template>
    <div class="orderlist-main">
        <shop-car-hander title="订单列表">
            <template v-slot:body>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </shop-car-hander>
        <div class="orderlist-box">
            <div class="container">
                <loading v-if="showLoading">
                    <template v-slot:body>
                        <p>数据正在加载中...</p>
                    </template>
                </loading>
                <div class="order-item" v-for="(item,index) in orderListData.list" :key="index" v-show="!showLoading">
                    <div class="item-top">
                        <div class="item-top-left">
                            {{item.createTime}}<span>|</span>订单号:{{item.orderNo}}<span>|</span>{{item.paymentTypeDesc}}
                        </div>
                        <div class="item-top-right">
                            应付金额:<span>{{item.payment}}</span>元
                        </div>
                    </div>
                    <div class="item-bottom clearfloat">
                        <div class="item-bottom-left z">
                            <div class="good-list" v-for="(good,idx) in item.orderItemVoList" :key="idx">
                                <div class="good-img"><img v-lazy="good.productImage" alt=""></div>
                                <div class="good-name">
                                    <p>{{good.productName}}</p>
                                    <p>合计:{{good.totalPrice}}元,商品数量:x{{good.quantity}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-bottom-right y">
                            <router-link :to="`/order/orderpay/${item.orderNo}`">未支付</router-link>
                        </div>
                    </div>
                </div>
                <el-pagination background layout="prev, pager, next" :total="total" @current-change="changePage"></el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import ShopCarHander from '../../../components/ShopCarHander'
import Loading from '../../../components/Loading'
export default {
    name:'OrderList',
    components:{
        ShopCarHander,
        Loading
    },
    data() {
        return {
            orderListData:{},//订单列表数据
            showLoading:true,//Loading加载显示控制
            total:0,//总页数
        }
    },
    mounted() {
        this.getOrderListData(1);
    },
    methods:{
        //获取订单列表数据
        getOrderListData(pageNum){
            this.$api.getOrderList({
                pageSize:10,
                pageNum:pageNum
            }).then(res=>{
                if(res.status == 0){
                    this.orderListData = res.data;
                    this.showLoading = false;
                    this.total = res.data.total;
                }else if(res.status == 1){
                    this.$message.error(res.msg);
                }else{
                    this.$router.push('/login');
                }
            });
        },
        //改变页码
        changePage(currenPage){
            this.showLoading = true;
            this.getOrderListData(currenPage);
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/mixin.less");
    .orderlist-main{
        background-color: @colorJ;
        .orderlist-box{
            padding-bottom: 30px;
            .container{
                .order-item{
                    width: 100%;
                    margin-top: 30px;
                    .item-top{
                        background: @colorK;
                        height: 74px;
                        line-height: 74px;
                        padding: 0 43px;
                        font-size: @fontI;
                        color:@colorC;
                        display: flex;
                        justify-content: space-between;
                        .item-top-left{
                            span{
                                margin: 0 15px;
                            }
                        }
                        .item-top-right{
                            span{
                                font-size: @fontC;
                            }
                        }
                    }
                    .item-bottom{
                        background: @colorG;
                        padding: 0 43px;
                        .item-bottom-left{
                            width: 88%;
                            .good-list{
                                display: flex;
                                align-items: center;
                                height: 145px;
                                border-bottom: 1px solid @colorJ;
                                .good-img{
                                    width: 112px;
                                    img{
                                        width: 100%;
                                    }
                                }
                                .good-name{
                                    font-size: @fontH;
                                }
                            }
                        }
                        .item-bottom-right{
                            height: 145px;
                            line-height: 145px;
                            font-size: 20px;
                            color:@colorA;
                        }
                    }
                }
                .el-pagination{
                    text-align: right;
                    margin-top: 20px;
                }
                
            }
        }
        /deep/.el-pagination.is-background .el-pager li:not(.disabled).active{
            background-color: @colorA;
        }
        /deep/.el-pagination.is-background .el-pager li:not(.disabled):hover{
            color:@colorA;
        }
    }
</style>
