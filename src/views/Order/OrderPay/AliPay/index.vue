<template>
    <div class="alipay-main">
        <!-- <img src="/imgs/loading-svg/loading-bars.svg" alt="">-->
        <loading>
            <template v-slot:body>
                <p>正在跳转到支付页面，请稍后...</p>
            </template>
        </loading>
        <div class="form" v-html="content"></div> 
    </div>
</template>
<script>
import Loading from '../../../../components/Loading'
export default {
    name:'AliPay',
    components:{
        Loading
    },
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
