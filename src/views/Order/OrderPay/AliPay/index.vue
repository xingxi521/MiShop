<template>
    <div class="alipay-main">
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
        <p>正在跳转到支付页面，请稍后...</p>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
export default {
    name:'AliPay',
    data(){
        return{
            content:''
        }
    },
    mounted() {
       this.payHandler(); 
    },
    methods:{
        payHandler(){
            this.$api.postPay({
                orderId:this.$route.params.id,
                orderName:'高仿小米商城支付宝支付', //扫码支付时订单名称
                amount:0.01, //单位元
                payType:1 //1支付宝，2微信
            }).then(res=>{
                if(res.status == 0){
                    this.content = res.data.content;
                    this.$nextTick(()=>{
                        document.forms[0].submit();
                    });
                }else{
                    this.$message.error(res.msg);
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
    .alipay-main{
        text-align: center;
        img{
            width: 100px;
        }
        p{
            font-size: 20px;
        }
    }
</style>