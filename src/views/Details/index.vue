<template>
    <div class="details-main">
        <params-bar :title="productData.name"></params-bar>
        <div class="details-box">
            <div class="container clearfloat">
                <div class="box-left z">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
                <div class="box-right y">
                    <h2 class="item-title">{{productData.name}}</h2>
                    <p class="item-desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <p class="item-selltype">小米自营</p>
                    <div class="item-price">{{productData.price}}元<span class="del">{{productData.price+600}}元</span></div>
                    <div class="line"></div>
                    <div class="item-address">
                        <i class="ico-local"></i>
                        <div class="adr-text">北京 北京市 朝阳区 安定门街道</div>
                        <div class="itemstock">有现货</div>
                    </div>
                    <div class="item_version clearfloat">
                        <h2>选择颜色</h2>
                        <div class="select-params z" :class="{'selected':currentParams==1}" @click="selectParamsHandler(1,'6GB+64GB 全网通')">6GB+64GB 全网通</div>
                        <div class="select-params y" :class="{'selected':currentParams==2}" @click="selectParamsHandler(2,'4GB+64GB 移动4G')">4GB+64GB 移动4G</div>
                    </div>
                    <div class="item_color">
                        <h2>选择版本</h2>
                        <div class="select-color">深空灰</div>
                    </div>
                    <div class="item_total">
                        <div>{{productData.name}} {{currentParamsText}} 深灰色</div>
                        <div class="total_price">总计：{{productData.price}}元</div>
                    </div>
                    <button class="addcarbtn" @click="addCarHandler">加入购物车</button>
                </div>
            </div>
        </div>
        <ServerBar/>
    </div>
</template>
<script>
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ParamsBar from '../../components/ParamsBar'
import ServerBar from '../../components/ServerBar'
import { mapMutations } from 'vuex'
export default {
    name:'Details',
    components:{
        ParamsBar,
        ServerBar,
        swiper,
        swiperSlide
    },
    data() {
        return {
            productData:[],
            swiperOption:{
                autoplay:true,
                pagination: {
                el: '.swiper-pagination',
                clickable :true,
                }
            },
            currentParams:1,
            currentParamsText:''
        }
    },
    mounted() {
        this.getProduct();
    },
    methods:{
        //取商品数据
        getProduct(){
            this.$api.getOnlyProduct(this.$route.params.id).then(res=>{
                if(res.status == 0){
                    this.productData = res.data;
                    console.log(res.data);
                }
            })
        },
        //参数选择
        selectParamsHandler(index,params){
            this.currentParams = index;
            this.currentParamsText = params
        },
        //添加购物车
        addCarHandler(){
            this.$api.postBuyCar({
                productId:this.$route.params.id,
                selected:true
            }).then(res=>{
                if(res.status == 0){
                    this.setCarCount(res.data.cartTotalQuantity);
                }else{
                    this.$router.push('/login');
                }
            })
        },
        ...mapMutations(['setCarCount'])
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/mixin.less");
    .details-main{
        .details-box{
            .container{
               .box-left{
                    width: 642px;
                    height: 617px;
                    margin-top: 5px;
                    img{
                        width: 100%;
                    }
               }
               .box-right{
                    width: 584px;
                    height: 870px;
                    .item-title{
                        font-size: @fontC;
                        padding-top: 30px;
                        padding-bottom: 16px;
                        height: 26px;
                    }
                    .item-desc{
                        font-size: @fontJ;
                        height: 36px;
                    }
                    .item-selltype{
                        font-size: @fontI;
                        color:@colorA;
                        margin-top: 26px;
                        margin-bottom: 14px;
                        height: 15px;
                    }
                    .item-price{
                        font-size: @fontG;
                        color: @colorA;
                        height: 19px;
                        .del{
                            font-size: @fontI;
                            color: @colorD;
                            margin-left: 10px;
                            text-decoration: line-through;
                        }
                    }
                    .line{
                        height: 0;
                        margin-top: 25px;
                        margin-bottom: 28px;
                        border-top: 1px solid @colorH;
                    }
                    .item-address{
                        height: 108px;
                        background-color: #fafafa;
                        border: 1px solid @colorH;
                        box-sizing: border-box;
                        padding-top: 31px;
                        padding-left: 64px;
                        font-size: @fontJ;
                        line-height: 14px;
                        position: relative;
                        .ico-local{
                            .iconSet(20px,20px,'/imgs/detail/icon-loc.png');
                            position: absolute;
                            top: 27px;
                            left: 34px;
                        }
                        .adr-text{
                            color: @colorC;
                        }
                        .itemstock{
                            margin-top: 15px;
                            color: @colorA;
                        }
                    }
                    .item_version{
                        margin-top: 30px;
                        h2{
                            font-size: @fontH;
                            margin-bottom: 20px
                        }
                        .select-params{
                            width: 287px;
                            height: 50px;
                            line-height: 50px;
                            font-size: 16px;
                            color: @colorB;
                            border: 1px solid @colorH;
                            box-sizing: border-box;
                            text-align: center;
                            cursor: pointer;
                            &.selected{
                                border: 1px solid @colorA;
                                color: @colorA;
                            }
                        }
                    }
                    .item_color{
                        margin-top: 30px;
                        h2{
                            font-size: @fontH;
                            margin-bottom: 20px
                        }
                        .select-color{
                            width: 287px;
                            height: 50px;
                            line-height: 50px;
                            font-size: 16px;
                            border: 1px solid @colorA;
                            color: @colorA;
                            box-sizing: border-box;
                            text-align: center;
                            cursor: pointer;
                        }
                    }
                    .item_total{
                        height: 108px;
                        background: #fafafa;
                        padding: 24px 33px 29px 30px;
                        font-size: 14px;
                        margin-top: 50px;
                        margin-bottom: 30px;
                        box-sizing: border-box;
                        .total_price{
                            font-size: @fontE;
                            color:@colorA;
                            margin-top: 18px;
                        }
                    }
                    .addcarbtn{
                        .btnSet(300px,54px);
                        font-size: @fontI;
                    }
               } 
            }
        }
    }
</style>