<template>
    <div class="phone-main">
        <div class="container">
            <div class="phone_left">
                <router-link to="">
                    <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                </router-link>
            </div>
            <div class="phone_right">
                <!-- <div class="phone_list">
                    <div class="phone_item">

                    </div>
                </div> -->
                <ul class="phone_wrap">
                    <li v-for="(item,index) in phoneData" :key="index">
                        <router-link :to="'/details/'+item.id">
                            <div class="item_img">
                                <!-- /imgs/phone/phone_item1.png -->
                                <img v-lazy="item.mainImage" alt="">
                            </div>
                            <h3 class="item_title">{{item.name}}</h3>
                            <p class="item_desc">{{item.subtitle}}</p>
                        </router-link>
                        <p class="item_price" @click="addCar(item.id)">{{item.price|priceFilter}}</p>
                        
                    </li>
                </ul>
            </div>
        </div>
        <modal 
        title="提示" 
        :btnType="1" 
        sureText="查看购物车" 
        :showModal="showModal" 
        @closeHandler="closeHandler" 
        @submitHandler="submitHandler" 
        @cancelHandler="cancelHandler"
        >
            <template v-slot:body>
                <p>商品加入购物车成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
import Modal from '../../../components/Modal'
export default {
    name:'Phone',
    components:{
        Modal
    },
    data(){
        return{
            phoneData:[],
            showModal:false
        }
    },
    mounted() {
        this.$api.getProducts({
            categoryId:100012,
            pageSize:8
        }).then(res=>{
            console.log(res);
            this.phoneData = res.data.list;
        });
    },
    methods:{
        //模态框关闭事件
        closeHandler(){
            this.showModal = false;
        },
        //模态框取消事件
        cancelHandler(){
            this.showModal = false;
        },
        //模态框确定事件
        submitHandler(){
            this.showModal = false;
        },
        //添加购物车
        addCar(id){
            this.showModal = true;
        }
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
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/public.less");
    @import url("../../../assets/less/mixin.less");
    .phone-main{
        background-color: @colorJ;
        .container{
            display: flex;
            .phone_left{
                width: 234px;
                height: 614px;
                transition: all .5s;
                a{
                    img{
                        width: 234px;
                        height: 614px;
                    }
                }
                &:hover{
                    transform: translate(0,-5px);
                    box-shadow: 0 5px 10px rgba(0,0,0,.2);
                }
            }
            .phone_right{
                .phone_wrap{
                    width: 100%;
                    li{
                        width: 234px;
                        height: 260px;
                        padding: 20px 0;
                        margin-left: 14px;
                        margin-bottom: 14px;
                        background: #fff;
                        float: left;
                        transition: all .5s;
                        &:hover{
                            transform: translate(0,-5px);
                            box-shadow: 0 5px 10px rgba(0,0,0,.2);
                        }
                        a{
                            .item_img{
                                text-align: center;
                                margin: 0 auto 18px;
                                img{
                                    width: 200px;
                                    height: 160px;
                                }
                            }
                            .item_title{
                                font-size: @fontJ;
                                text-align: center;
                                color:@colorB;
                                margin: 0 10px 7px;
                            }
                            .item_desc{
                                text-align: center;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                margin: 0 10px 10px;
                                height: 18px;
                                font-size: 12px;
                                color: @colorL;
                            }
                            
                        }
                        .item_price{
                            color:@colorA;
                            font-size: @fontJ;
                            text-align:center;
                            margin: 0 10px 14px;
                            cursor: pointer;
                            &:after{
                                content:'';
                                .iconSet(17px,18px,'/imgs/icon-cart-hover.png');
                                vertical-align: middle;
                                margin-bottom: 5px;
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>