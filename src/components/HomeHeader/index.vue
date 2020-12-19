<template>
    <div class="header">
        <div class="header-top">
            <div class="container">
                <div class="top-left">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="top-right">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="shop-car"><span></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="bottom-left">
                    <a href="/#/"></a>
                </div>
                <div class="bottom-center">
                    <ul class="center-nav">
                        <li>
                            <a href="#">小米手机</a>
                            <div class="children">
                                <ul>
                                    <li class="child-item" v-for="(item) in ProductsData" :key="item.id">
                                        <router-link to="/">
                                            <div class="child-img">
                                                <img :src="item.mainImage" alt="">
                                            </div>
                                            <p class="child-title">{{item.name}}</p>
                                            <p class="child-price">{{item.price | priceFilter}}</p>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Redmi 红米</a>
                            <div class="children"></div>
                        </li>
                        <li>
                            <a href="#">电视</a>
                            <div class="children"></div>
                        </li>
                        
                    </ul>
                </div>
                <div class="bottom-right">
                    <input type="text" class="search-input">
                    <span class="search-btn"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    data(){
        return{
            ProductsData:[]
        }
    },
    mounted() {
        this.$api.getProducts({
            pageSize:6,
            categoryId:100012
        }).then(res=>{
            this.ProductsData = res.data.list
            console.log(this.ProductsData);
        });
    },
    filters:{
        priceFilter(val){
            if(!val) return '';
            return '￥'+val+'元'
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .header{
        .header-top{
            width: 100%;
            height: 39px;
            line-height: 39px;
            background-color: @colorB;
            .container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .top-left{
                    a{
                        color: @colorL;
                        margin-right: 17px;
                        &:hover{
                            color: @colorG;
                        }
                    }
                    
                }
                .top-right{
                    a{
                        color: @colorL;
                        margin-right: 19px;
                        &:hover{
                            color: @colorG;
                        }
                    }
                    .shop-car{
                        width: 110px;
                        background-color: @colorA;
                        display: inline-block;
                        text-align: center;
                        color: @colorG;
                        margin-right: 0;
                        span{
                            .iconSet(16px;12px;'/imgs/icon-cart-checked.png');
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
        .header-bottom{
            .container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 112px;
                position: relative;
                .bottom-left{
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
                .bottom-center{
                    width: 600px;
                    height: 112px;
                    line-height: 112px;
                    .center-nav{
                        li{
                            float: left;
                            text-align: center;
                            a{
                                color: @colorB;
                                font-size: 16px;
                                margin-right: 20px;
                                display: block;
                                &:hover{
                                    color: @colorA;
                                    transition: color .2s;
                                }
                                &:hover~.children{
                                    height: 220px;
                                    transition: height .5s;
                                }
                            }
                            &:a:last-child{
                                margin-right: 0;
                            }
                            .children{
                                position: absolute;
                                width: @min-width;
                                left: 0;
                                // background-color: red;
                                top: 112px;
                                height: 0;                      
                                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                                overflow: hidden;
                                z-index: 100;
                                &:hover{
                                    height: 220px;
                                    transition: height .5s;
                                }
                                ul{
                                    // height: 220px;
                                    .child-item{
                                        width: 16%;
                                        margin-top: 26px;
                                        line-height: 20px;
                                        .child-img{
                                            border-right: 1px solid @colorF;
                                            img{
                                                width: 160px;
                                            }
                                        }
                                        &:last-child .child-img{
                                            border-right: none;
                                        }
                                        .child-title{
                                            margin-top: 16px;
                                            color: @colorB;
                                            font-size: @fontJ;
                                        }
                                        .child-price{
                                            color: @colorA;
                                            font-weight: bold;
                                            font-size: @fontJ;
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
                }
                .bottom-right{
                    .search-input{
                        width: 223px;
                        height: 48px;
                        border: 1px solid @colorE;
                        padding: 0 10px;
                        float: left;
                        &:focus{
                            border: 1px solid @colorA;
                        }
                        &:focus~.search-btn {
                            border: 1px solid @colorA;
                            border-left: none;
                        }
                    }
                    .search-btn{
                        display: inline-block;
                        padding: 1px 6px;
                        text-align: center;
                        line-height: 46px;
                        border: 1px solid @colorE;
                        border-left: none;
                        transition: background-color .3s;
                        .iconSet(38px;46px;'/imgs/icon-search.png';18px);
                        &:hover{
                            background-color: @colorA;
                            transition: background-color .3s;
                        }
                    }
                }
            }
        }
    }
</style>