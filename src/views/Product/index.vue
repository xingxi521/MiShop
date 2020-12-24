<template>
    <div class="product-main">
        <product-bar :title="productData.name">
            <template v-slot:btn>
                <button class="buy" @click="buyHandler">立即购买</button>
            </template>
        </product-bar>
        <div class="product-desc">
            <div class="item_bg1">
                <div class="item1_text">
                    <h1 class="text_title">{{productData.name}}</h1>
                    <p class="text_desc">{{productData.subtitle}}</p>
                    <p class="text_price">￥{{productData.price}}</p>
                </div>
            </div>
            <div class="item_bg2">
                <div class="item2_text">
                    <h1 class="text_title">探索，让未来多一种可能</h1>
                    <p class="text_desc">MIX Alpha 是小米站在 5G时代的起点，设计的一款面向未来的概念手机。</p>
                    <p class="text_desc">这部很未来的手机，承载了小米对于 5G时代很多个方向的探索，</p>
                    <p class="text_desc">最终实现在一部手机之上。所有这些不可能的探索，并不是因为它们一定能成为</p>
                    <p class="text_desc">确定的未来，而是希望用探索，让未来多一种可能。</p>
                </div>
            </div>
            <div class="item_bg4" @click="videoClickHandler"></div>
            <div class="item_bg3">
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <VideoModal :showVideo="showVideo" @closeHandler="closeHandler"/>
    </div>
</template>
<script>
import ProductBar from '../../components/ParamsBar'
import VideoModal from './VideoModal'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Product',
    components:{
        ProductBar,
        swiper,
        swiperSlide,
        VideoModal
    },
    data(){
        return{
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 10,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            showVideo:false,
            productData:{}
        }
    },
    mounted() {
        this.getProduct();
    },
    methods:{
        closeHandler(){
            this.showVideo = false;
        },
        videoClickHandler(){
            this.showVideo = true;
        },
        //获取单个商品数据
        getProduct(){
            this.$api.getOnlyProduct(this.$route.params.id).then(res=>{
                if(res.status == 0){
                    this.productData = res.data;
                }
            })
        },
        //立即购买事件
        buyHandler(){
            this.$router.push('/details/'+this.$route.params.id);
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .product-main{
        position: relative;
        .product-desc{
            .item_bg1{
                .iconSet(100%,100%,'/imgs/product/product-bg-1.jpg',100% 100%);
                height: 921px;
                float: left;
                .item1_text{
                    color: @colorG;
                    position:absolute;
                    left: 19%;
                    top: 15%;
                    .text_title{
                        font-size: 50px;
                        font-family: '宋体';
                    }
                    .text_desc{
                        font-size: @fontF;
                        margin-top: 10px;
                        margin-bottom: 30px;
                    }
                    .text_price{
                        font-size: @fontF;
                    }
                }
            }
            .item_bg2{
                .iconSet(100%,100%,'/imgs/product/product-bg-2.jpg',100% 100%); 
                height: 917px;
                .item2_text{
                    color: @colorG;
                    text-align: center;
                    margin-top: 150px;
                    .text_title{
                        font-size: 44px;
                        font-family: '宋体';
                    }
                    .text_desc{
                        font-size: @fontJ;
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                }
            }
            .item_bg3{
                img{
                    width: 100%;
                }
            }
            .item_bg4{
                .iconSet(100%,100%,'/imgs/product/product-bg-3.jpg',100% 100%); 
                height: 414px;
                cursor: pointer;
            }
        }
    }
</style>