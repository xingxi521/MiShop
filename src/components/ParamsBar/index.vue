<template>
    <div class="paramsbar-main" :class="{'setFixed':isFixed}">
        <div class="container">
            <div class="bar_left">{{title}}</div>
            <div class="bar_right">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">咨询客服</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <button class="buy">立即购买</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ParamsBar',
    data(){
        return{
            isFixed:false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.checkFixed)
    },
    props:{
        title:{
            type:String,
            default:''
        }
    },
    methods:{
        checkFixed(){
            let scrollTop = window.pageYOffset || window.document.body.scrollTop || window.document.documentElement.scrollTop;
            if(scrollTop > 151){
                this.isFixed = true;
            }else{
                this.isFixed = false;
            }
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.checkFixed,false);//切换页面是把监听清除，false是冒泡
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .paramsbar-main{
        width: 100%;
        height: 63px;
        line-height: 63px;
        &.setFixed{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
            // box-shadow: 0 3px 5px @colorF;
        }
        .container{
            display: flex;
            justify-content: space-between;
            .bar_left{
                font-size: @fontH;
                font-weight: 400;
                color: @colorB;
            }
            .bar_right{
                a{
                    font-size: @fontJ;
                    color: @colorC;
                }
                span{
                    margin: 0 7px;
                    font-size: @fontI;
                    color: @colorF;
                }
                .buy{
                    .btnSet();
                    margin-right: 0;
                    margin-left: 15px;
                }
            }
        }
    }
</style>