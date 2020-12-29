<template>
    <div class="pay-main">
        <shop-car-hander title="订单支付">
            <template v-slot:body>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </shop-car-hander>
        <div class="container">
            <div class="pay-top">
                <div class="pay-top-head">
                    <div class="pay-icon"></div>
                    <div class="pay-info">
                        <h2>订单提交成功！去付款咯～</h2>
                        <p>请在<span style="color:#FF6600">30</span>分内完成支付, 超时后将取消订单</p>
                        <p>收货信息：{{`${shippingVo.receiverName} ${shippingVo.receiverMobile} ${shippingVo.receiverProvince} ${shippingVo.receiverCity} ${shippingVo.receiverDistrict} ${shippingVo.receiverAddress}`}}</p>
                    </div>
                    <div class="pay-total">
                        <p style="margin-bottom:30px">应付总额：<span style="color:#FF6600;font-size:28px">{{orderDetailData.payment}}</span>元</p>
                        <p class="pay-total-detail">订单详情：<span class="detail-icon" :class="{'up':showDetail}" @click="showDetail=!showDetail"></span></p>
                    </div>
                </div>
                <div class="pay-top-detail" v-if="showDetail">
                    <div class="detail-item">
                        <p class="detail-item-title">订单号：</p>
                        <p class="detail-item-info">{{orderDetailData.orderNo}}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-item-title">收货信息：</p>
                        <p class="detail-item-info">{{`${shippingVo.receiverName} ${shippingVo.receiverMobile} ${shippingVo.receiverProvince} ${shippingVo.receiverCity} ${shippingVo.receiverDistrict} ${shippingVo.receiverAddress}`}}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-item-title">商品名称：</p>
                        <p class="detail-item-info">
                            <ul>
                                <li v-for="(item,index) in orderDetailData.orderItemVoList" :key="index">
                                    <img v-lazy="item.productImage" alt="">
                                    {{item.productName}}
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-item-title">发票信息：</p>
                        <p class="detail-item-info">电子发票 个人</p>
                    </div>
                </div>
            </div>
            <div class="pay-bottom">
                <h2>选择以下支付方式付款</h2>
                <p>支付平台</p>
                <div class="pay-type">
                    <div class="alipay" @click="aliPayHandler"></div>
                    <div class="wxpay" @click="wxPayHandler"></div>
                    <WxPay :showModal="wxModal" :qrImg="qrcodeImg" @closeClick="closeWxPayModal"/>
                    <modal 
                    title="提示" 
                    :btnType="2" 
                    sureText="我已支付"
                    cancelText="我未支付"
                    :showModal="showModal" 
                    @closeHandler="showModal=false" 
                    @submitHandler="submitHandler" 
                    @cancelHandler="cancelHandler"
                    >
                        <template v-slot:body>
                            <p>请问您是否已经支付成功？</p>
                        </template>
                    </modal>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import WxPay from './WxPay'
import Modal from '../../../components/Modal'
import QRCode from 'qrcode'
import ShopCarHander from '../../../components/ShopCarHander'
export default {
    name:'OrderPay',
    components:{
        WxPay,
        Modal,
        ShopCarHander
    },
    data(){
        return{
            showDetail:false,
            orderDetailData:{},
            shippingVo:{},//地址信息
            qrcodeImg:'',//微信支付二维码
            wxModal:false,//微信支付模态框显示控制
            showModal:false,//二次确认是否支付模态框显示控制
            timer:'',//定时器ID
        }
    },
    mounted() {
        this.getOrderDetail();
    },
    methods:{
        //获取订单详情数据
        getOrderDetail(){
            this.$api.getOrdersDetail(this.$route.params.id).then(res=>{
                if(res.status == 0){
                    this.orderDetailData = res.data;
                    this.shippingVo = res.data.shippingVo;
                }else{
                    this.$message.error(res.msg);
                }
            });
        },
        //支付宝支付
        aliPayHandler(){
            window.open(`/#/order/alipay/${this.$route.params.id}`,"_blank");
        },
        //微信支付
        wxPayHandler(){
            this.$api.postPay({
                orderId:this.$route.params.id,
                orderName:'高仿小米商城微信支付', //扫码支付时订单名称
                amount:0.01, //单位元
                payType:2 //1支付宝，2微信
            }).then(res=>{
                if(res.status == 0){
                    QRCode.toDataURL(res.data.content)
                    .then(url => {
                        this.qrcodeImg = url;
                        this.wxModal = true;
                        this.loopWxPayCheck();
                    })
                    .catch(err => {
                        this.wxModal = false;
                        this.$message.error(err);
                    });
                }else{
                    this.wxModal = false;
                    clearInterval(this.timer);
                    this.$message.error(res.msg);
                }
            });
        },
        //关闭微信支付模态框
        closeWxPayModal(){
           this.wxModal = false; 
           this.showModal = true;
           clearInterval(this.timer);
        },
        //二次确认支付模态框的提交
        submitHandler(){
            this.$router.push('/order/orderlist');
        },
        cancelHandler(){
            this.showModal = false;
        },
        loopWxPayCheck(){
            this.timer = setInterval(()=>{
                this.$api.getOrdersDetail(this.$route.params.id).then(res=>{
                    if(res.status == 0){
                        if(res.data.status == 20){
                            this.$router.push('/order/orderlist');
                        }
                    }else{
                        this.$message.error(res.msg);
                        clearInterval(this.timer);
                    }
                });
            },1000);
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/mixin.less");
    .pay-main{
        background-color: @colorJ;
        padding: 0 0 60px 0;
        .container{
            margin-top: 30px;
            .pay-top{
                padding: 62px 50px;
                background-color: @colorG;
                font-size: @fontJ;
                margin-bottom: 30px;
                .pay-top-head{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .pay-icon{
                        .iconSet(90px,90px,'/imgs/icon-gou.png',60px);
                        background-color: #80c58a;
                        border-radius: 50%;
                        margin-right: 30px;
                    }
                    .pay-info{
                        width: 800px;
                        h2{
                            margin-bottom: 15px;
                        }
                    }
                    .pay-total{
                        .pay-total-detail{
                            .detail-icon{
                                .iconSet(14px,10px,'/imgs/icon-down.png');
                                transition: all .3s;
                                cursor: pointer;
                                &.up{
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }
                }
                .pay-top-detail{
                    border-top: 1px solid @colorF;
                    padding-top: 47px;
                    padding-left: 130px;
                    font-size: @fontJ;
                    margin-top: 45px;
                    .detail-item{
                        margin-bottom: 20px;
                        .detail-item-title{
                            width: 100px;
                            float: left;
                        }
                        .detail-item-info{
                            display: inline-block;
                            ul{
                                li{
                                    img{
                                        width: 30px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .pay-bottom{
                padding: 26px 50px 72px;
                background-color: @colorG;
                color: @colorB;
                h2{
                    font-size: @fontG;
                    font-weight: 200;
                    color: @colorB;
                    padding-bottom: 24px;
                    border-bottom: 1px solid @colorF;
                    margin-bottom: 26px;
                }
                p{
                    font-size: @fontH;
                }
                .pay-type{
                    margin-top: 20px;
                    .alipay{
                        border: 1px solid #d7d7d7;
                        cursor: pointer;
                        .iconSet(188px,64px,'/imgs/pay/icon-ali.png',103px 38px);
                        margin-right: 15px;
                    }
                    .wxpay{
                        border: 1px solid #d7d7d7;
                        cursor: pointer;
                        .iconSet(188px,64px,'/imgs/pay/icon-wechat.png',103px 38px);
                    }
                }
            }
        }
    }
</style>