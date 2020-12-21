<template>
    <div class="footer-main">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt=""><br/>
            <span>高仿小米商城</span>
        </div>
        <div class="footer-link">
            <a href="#">小米商城</a><span>|</span>
            <a href="#">小米之家</a><span>|</span>
            <a href="#">小米钱包</a><span>|</span>
            <a href="#">MIUI</a><span>|</span>
            <a href="#">小米集团隐私政策</a><span>|</span>
            <a href="#"> 小米商城隐私政策</a>
        </div>
        <div class="footer-cpoyright">
            © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
        </div>
    </div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .footer-main{
        height: 234px;
        background-color: @colorB;
        border-top: 4px solid @colorA;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            img{
                width: 53px;
                height: 36px;
            }
            span{
                color: @colorD;
                font-size: @fontI;
                margin-top: 5px;
                display: inline-block;
            }
        }
        .footer-link{
            margin-top: 20px;
            a{
                color: @colorD;
                font-size: 16px;
            }
            span{
                color: @colorD;
                padding: 0 5px;
                font-size: @fontI;
            }
        }
        .footer-cpoyright{
            margin-top: 20px;
            color: @colorD;
            font-size: @fontI;
        }
    }
</style>