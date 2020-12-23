<template>
    <div class="video-main" :class="{'mainSlider':showVideo}">
        <div class="mask" :class="{'maskSlider':showVideo}"></div>
        <div class="video-content" :class="{'slider':showVideo}">
            <span class="video_close" @click="$emit('closeHandler')"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
        </div>
    </div>
</template>
<script>
export default {
    name:'VideoModal',
    data(){
        return{
            
        }
    },
    props:{
        showVideo:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/public.less");
    @import url("../../../assets/less/mixin.less");
    .video-main{
        .position(fixed,0,-100%);
        z-index: 1;
        transition: top .6s;
        &.mainSlider{
            top: 0;
        }
        .mask{
            .position(fixed,0,-100%);
            background-color: rgba(0,0,0,.5);
            &.maskSlider{
                top: 0;
            }
        }
        .video-content{
            width: 1000px;
            height: 561px;
            position: absolute;
            left: 50%;
            top: -100%;
            transform: translate(-50%,-50%);
            position: relative;
            transition: all .6s;
            &.slider{
               top: 50%; 
            }
            video{
                width: 100%;
            }
            .video_close{
                .iconSet(20px,20px,'/imgs/icon-close.png');
                position: absolute;
                right: 11px;
                top: 10px;
                cursor: pointer;
                z-index: 1;
            }
        }
    }
</style>