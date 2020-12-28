<template>
    <transition name='fade'>
        <div class="modal-main" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog clearfloat">
                <div class="left_img">
                    <img v-lazy="'/imgs/pay/icon-scan.png'" alt="">
                </div>
                <div class="right_qlcode">
                    <div class="qrcode_head clearfloat">
                        微信支付
                        <span class="icon-close" @click="$emit('closeClick')"></span>
                    </div>
                    <div class="qrcode">
                        <img v-lazy="qrImg" alt="">
                    </div>
                    <p style="text-align:center;font-size:16px">请使用微信扫一扫</p>
                    <p style="text-align:center;font-size:16px">二维码完成支付</p>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'WxPay',
    props:{
        showModal:{
            type:Boolean,
            default:true
        },
        qrImg:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../../../assets/less/config.less");
    @import url("../../../../assets/less/public.less");
    @import url("../../../../assets/less/mixin.less");
    .modal-main{
        .position(fixed);
        transition: all .5s;
        z-index: 2;
        .mask{
            .position(fixed);
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 2;
        }
        &.fade-enter-active{
            top: 0%;
        }
        &.fade-leave-active{
            top:-100%;
        }
        &.fade-enter{
            top: -100%;
        }
        .modal-dialog{
            position: absolute;
            left: 50%;
            top: 45%;
            height: auto;
            transform: translate(-50%, -50%);
            z-index: 3;
            min-width: 666px;
            .left_img{
                display: inline-block;
                float: left;
                img{
                    display: inline-block;
                    width: 296px;
                    height: 485px;
                }
            }
            .right_qlcode{
                width: 370px;
                height: 440px;
                display: inline-block;
                background-color: #fff;
                margin-top: 23px;
                .qrcode_head{
                    height: 60px;
                    line-height: 60px;
                    color: #333;
                    font-size: 20px;
                    padding: 0 18px;
                    background-color: #f5f5f5;
                    .icon-close{
                        .iconSet(13px,13px,'/imgs/icon-close.png');
                        float: right;
                        margin-top: 23px;
                        cursor: pointer;
                    }
                }
                .qrcode{
                    text-align: center;
                    padding: 44px 0 26px;
                    img{
                        width: 237px;
                        height: 240px;
                    }
                }
            }
        }
    }
    
</style>