<template>
    <transition name='fade'>
        <div class="modal-main" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="dialog-header">
                    <span class="dialog-title">{{title}}</span>
                    <a href="javascript:;" @click="$emit('closeHandler')"></a>
                </div>
                <div class="dialog-body">
                    <slot name="body"></slot>
                </div>
                <div class="dialog-bottom">
                    <button class="surebtn" v-if="btnType==1" @click="$emit('submitHandler')">{{sureText}}</button>
                    <template v-else>
                        <button class="surebtn" @click="$emit('submitHandler')">{{sureText}}</button>
                        <button class="cancelbtn" @click="$emit('cancelHandler')">{{cancelText}}</button>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'Modal',
    props:{
        title:{
            type:String,
            default:'温馨提示'
        },
        //按钮类型 1:确定，2，确认取消
        btnType:{
            type:Number,
            default:1
        },
        sureText:{
            type:String,
            default:"确定"
        },
        cancelText:{
            type:String,
            default:"取消"
        },
        showModal:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
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
            .position(absolute,50%,45%,660px,auto);
            transform: translate(-50%,-50%);
            background: #fff;
            z-index: 3;
            .dialog-header{
                width: 100%;
                height: 60px;
                line-height: 60px;
                background-color: @colorJ;
                padding: 0 20px;
                box-sizing: border-box;
                .dialog-title{
                    font-size: @fontI;
                }
                a{
                    position: absolute;
                    right: 20px;
                    top: 23px;
                    .iconSet(14px,14px,'/imgs/icon-close.png');
                }
            }
            .dialog-body{
                padding:42px 40px 54px;
                font-size:14px;
            }
            .dialog-bottom{
                height: 82px;
                line-height: 82px;
                text-align: center;
                background-color: @colorJ;
                .surebtn{
                    .btnSet();
                }
                .cancelbtn{
                    .btnSet(110px,30px,#bbb);
                }
            }
        }
    }
    
</style>