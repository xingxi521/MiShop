<template>
    <div class="carheader-mian">
        <div class="container">
            <div class="carheader-left">
                <a href="/#/"></a>
            </div>
            <div class="car-title">
                <h2>
                    {{title}}
                    <!-- <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span> -->
                    <slot name="body"></slot>
                </h2>
            </div>
            <div class="car-right">
                <span>欢迎用户:{{username}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'ShopCarHeader',
    computed:{
        ...mapState(['username'])
    },
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/mixin.less");
    @import url("../../assets/less/config.less");
    .carheader-mian{
        height: 55px;
        line-height: 55px;
        padding: 30px 0;
        border-bottom: 2px solid @colorA;
        .container{
            display: flex;
            justify-content: space-between;
            .carheader-left{
                width: 55px;
                height: 55px;
                overflow: hidden;
                a{
                    display: inline-block;
                    background-color: @colorA;
                    width: 110px;
                    height: 55px;
                    &:before{
                        content: " ";
                        transition: margin .2s;
                        .iconSet(55px;59px;'/imgs/mi-logo.png';55px);
                    }
                    &:after{
                        content: " ";
                        .iconSet(55px;59px;'/imgs/mi-home.png';55px);
                    }
                    &:hover:before{
                        margin-left: -55px;
                        transition: margin .2s;
                    }
                }
            }
            .car-title{
                width: 1000px;
                h2{
                    font-size: @fontC;
                    span{
                        font-size: @fontJ;
                        margin-left: 17px;
                        color:@colorD;
                        font-weight: 200;
                    }
                }
            }
            .car-right{
                span{
                    font-size: @fontI;
                }
            }
        }
    }
</style>