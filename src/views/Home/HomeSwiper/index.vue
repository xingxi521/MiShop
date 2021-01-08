<template>
    <div class="homeswiper-main">
        <LeftNav/>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in navBannerList" :key="index">
                <router-link class="homeswiper-img" :to="'/product/'+item.id"><img :src="item.imgLink" alt=""></router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LeftNav from './LeftNav'
export default {
    name:'HomeSwiper',
    components:{
        swiper,
        swiperSlide,
        LeftNav
    },
    data() {
        return {
            swiperOption: {
                loop:true,
                autoplay:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable :true
                }
            },
            //mock轮播图的数据
            navBannerList:[
                {
                    id:40,
                    imgLink:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:41,
                    imgLink:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:42,
                    imgLink:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:45,
                    imgLink:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:46,
                    imgLink:'/imgs/slider/slide-5.jpg'
                }
            ]
        }
    },
}
</script>
<style lang="less" scoped>
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/public.less");
    @import url("../../../assets/less/mixin.less");
    .homeswiper-main{
        position: relative;
        .homeswiper-img{
            img{
                width: 100%;
            }
        }
        .swiper-button-prev{
            color: #d2d3d6;
            height: 69px;
            width: 41px;
            left:236px;
            &:hover{
                color: #fff;
                background-color: rgba(0,0,0,0.5); 
            }
            &:after{
                font-size: 30px;
            }
        }
        .swiper-button-next{
            color: #d2d3d6;
            height: 69px;
            width: 41px;
            right: 0;
            &:hover{
                color: #fff;
                background-color: rgba(0,0,0,0.5); 
            }
            &:after{
                font-size: 30px;
            }
        }
    }
</style>