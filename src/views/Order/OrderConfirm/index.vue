<template>
    <div class="confirm-main">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
            <defs>
                <symbol id="icon-add" viewBox="0 0 31 32">
                <title>add</title>
                <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                <title>edit</title>
                <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 32 32">
                <title>delete</title>
                <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
                <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
                <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
                <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
                </symbol>
            </defs>
        </svg>
        <div class="container">
            <div class="order-box">
                <div class="address-box">
                    <h2 class="adr-box-title">收货地址</h2>
                    <div class="address-list clearfloat">
                        <div class="addr-item" v-for="(item,index) in addressDataList" :key="index" :class="{'checked':index == currenAddrIndex}"  @click="selectedHandler(item.id,index)">
                            <h2 class="item-title">{{item.receiverName}}</h2>
                            <p class="item-phone">{{item.receiverMobile}}</p>
                            <p class="item-address">{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</p>
                            <div class="item-bottom">
                                <a href="javascript:;" class="z" @click="deleteHandler(item.id)">
                                    <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                                </a>
                                <a href="javascript:;" class="y" @click="openEditorModal(2,item.id,item)">
                                    <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg>
                                </a>
                            </div>
                            <modal 
                            title="提示" 
                            :btnType="2" 
                            sureText="确定删除此地址" 
                            :showModal="showModal" 
                            @closeHandler="closeHandler" 
                            @submitHandler="submitHandler" 
                            @cancelHandler="cancelHandler"
                            >
                                <template v-slot:body>
                                    <p>请问您是否要确定删除该地址吗？</p>
                                </template>
                            </modal>
                            <!-- 添加模态框 -->
                            <modal 
                            title="添加收货地址" 
                            :btnType="2" 
                            sureText="确定" 
                            :showModal="showEditorModal" 
                            @closeHandler="closeEditorHandler" 
                            @submitHandler="submitEditorHandler" 
                            @cancelHandler="cancelEditorHandler"
                            >
                                <template v-slot:body>
                                    <div class="item_wrap">
                                        <div class="item_one">
                                            <input type="text" placeholder="请输入姓名" v-model="addressParamsBind.name">
                                            <input type="text" placeholder="请输入手机号" v-model="addressParamsBind.phone">
                                        </div>
                                        <div class="item_two">
                                            <select name="province" v-model="addressParamsBind.province">
                                                <option value="北京">北京</option>
                                                <option value="天津">天津</option>
                                                <option value="河北">河北</option>
                                            </select>
                                            <select name="city" v-model="addressParamsBind.city">
                                                <option value="北京">北京</option>
                                                <option value="天津">天津</option>
                                                <option value="河北">石家庄</option>
                                            </select>
                                            <select name="district" v-model="addressParamsBind.district">
                                                <option value="北京">昌平区</option>
                                                <option value="天津">海淀区</option>
                                                <option value="河北">东城区</option>
                                                <option value="天津">西城区</option>
                                                <option value="河北">顺义区</option>
                                                <option value="天津">房山区</option>
                                            </select>
                                        </div>
                                        <div class="item_three">
                                            <textarea name="street" v-model="addressParamsBind.street"></textarea>
                                        </div>
                                        <div class="item_four">
                                            <input type="text" placeholder="请输入邮政编码" v-model="addressParamsBind.postal">
                                        </div>
                                    </div>
                                </template>
                            </modal>
                        </div>
                        <div class="addr-add" @click="openEditorModal(1)">
                            <div class="add-icon"></div>
                            <p>添加新地址</p>
                        </div>
                    </div>
                </div>
                <div class="goods-box">
                    <h2>商品</h2>
                    <ul>
                        <li v-for="(item,index) in shopCarDataList" :key="index">
                            <div class="good-name">
                                <img v-lazy="item.productMainImage" alt="">
                                <span>{{item.productName + ' ' + item.productSubtitle}}</span>
                            </div>
                            <div class="good-price">{{item.productPrice}}元 x{{item.quantity}}</div>
                            <div class="good-total">{{item.productTotalPrice}}元</div>
                        </li>
                    </ul>
                </div>
                <div class="distribution-box">
                    <h2>配送方式</h2>
                    <span>包邮</span>
                </div>
                <div class="distribution-box">
                    <h2>发票</h2>
                    <span>电子发票 个人</span>
                </div>
                <div class="detail-box">
                    <div class="item-detail">
                        <span class="item-detail-name">商品件数：</span>
                        <span class="item-detail-val">{{shopCount}}件</span>
                    </div>
                    <div class="item-detail">
                        <span class="item-detail-name">商品总价：</span>
                        <span class="item-detail-val">{{cartTotalPrice}}元</span>
                    </div>
                    <div class="item-detail">
                        <span class="item-detail-name">优惠活动：</span>
                        <span class="item-detail-val">0元</span>
                    </div>
                    <div class="item-detail">
                        <span class="item-detail-name">运费：</span>
                        <span class="item-detail-val">0元</span>
                    </div>
                    <div class="item-detail">
                        <span class="item-detail-name">应付总额：</span>
                        <span class="item-detail-total">{{cartTotalPrice}}元</span>
                    </div>
                </div>
                <div class="btn-box">
                    <router-link to="/shopcar" class="back-car">返回购物车</router-link>
                    <a href="javascript:;" class="go-total" @click="gotoPayHandler">去结算</a>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import Modal from '../../../components/Modal'
export default {
    name:'OrderConfirm',
    components:{
        Modal
    },
    data() {
        return {
            addressDataList:[],
            shopCarDataList:[],
            shopCount:0,//商品件数
            cartTotalPrice:0,//商品总额
            showModal:false,//模态框显示控制
            selectedAddressId:-1,//选中的地址ID
            showEditorModal:false,//添加与编辑模态框显示
            addressParamsBind:{},//添加与编辑地址的数据绑定对象
            actionType:-1,//动作类型：1是添加 2是编辑
            currenAddrIndex:-1,//当前选中的地址的索引
            orderNo:0//订单号
        }
    },
    mounted() {
        //获取收货地址数据
        this.getAddressList();
        //获取购物车选中后的商品数据
        this.getShopCarList();
    },
    methods:{
        //获取收货地址数据
        getAddressList(){
            this.$api.getShippings().then(res=>{
                if(res.status == 0){
                    this.addressDataList = res.data.list;
                }else{
                    this.$router.push('/login');
                }
            });
        },
        //获取购物车选中后的商品数据
        getShopCarList(){
            this.$api.getBuyCarList().then(res=>{
                // console.log(res);
                if(res.status == 0){
                    let resultData = res.data.cartProductVoList.filter(item=>item.productSelected);
                    this.shopCarDataList = resultData;
                    this.cartTotalPrice = res.data.cartTotalPrice;
                    this.shopCarDataList.map(item=>{
                        this.shopCount+=item.quantity;
                    });
                }else{
                    this.$router.push('/login');
                }
            });
        },
        //删除地址事件
        deleteHandler(id){
            this.showModal = true;
            this.selectedAddressId = id;
        },
        //模态框关闭事件
        closeHandler(){
            this.showModal = false;
            this.selectedAddressId = -1;
        },
        //模态框取消事件
        cancelHandler(){
            this.showModal = false;
            this.selectedAddressId = -1;
        },
        //模态框提交事件
        submitHandler(){
            this.$api.delShippings(this.selectedAddressId).then(res=>{
                if(res.status == 0){
                    this.showModal = false;
                    this.selectedAddressId = -1;
                    this.getAddressList();
                }else{
                    this.selectedAddressId = -1;
                    this.$router.push('/login');
                }
            });
        },
        //打开添加编辑地址模态框事件
        openEditorModal(type,id,item){
            this.showEditorModal = true;
            this.actionType = type;
            this.selectedAddressId = id;
            if(type == 1){
                this.addressParamsBind = {};
            }else if(type == 2){
                this.addressParamsBind.name = item.receiverName;
                this.addressParamsBind.phone = item.receiverMobile;
                this.addressParamsBind.province = item.receiverProvince;
                this.addressParamsBind.city = item.receiverCity;
                this.addressParamsBind.district = item.receiverDistrict;
                this.addressParamsBind.street = item.receiverAddress;
                this.addressParamsBind.postal = item.receiverZip;
            }
        },
        //编辑添加模态框关闭事件
        closeEditorHandler(){
            this.showEditorModal = false;
            this.selectedAddressId = -1;
        },
        //编辑添加模态框取消事件
        cancelEditorHandler(){
            this.showEditorModal = false;
            this.selectedAddressId = -1;
        },
        //编辑添加模态框提交事件
        submitEditorHandler(){
            if(this.checkForm(this.addressParamsBind)){
                let tempParams = {
                    receiverName:this.addressParamsBind.name,
                    receiverMobile:this.addressParamsBind.phone,
                    receiverProvince:this.addressParamsBind.province,
                    receiverCity:this.addressParamsBind.city,
                    receiverDistrict:this.addressParamsBind.district,
                    receiverAddress:this.addressParamsBind.street,
                    receiverZip:this.addressParamsBind.postal
                }
                if(this.actionType == 1){//添加
                    this.$api.addShippings(tempParams).then(res=>{
                        if(res.status == 0){
                            this.showEditorModal = false;
                            this.actionType = -1;
                            this.selectedAddressId = -1;
                            this.getAddressList();
                        }else{
                            this.actionType = -1;
                            this.selectedAddressId = -1;
                            this.$router.push('/login');
                        }
                    });
                }else if(this.actionType == 2){//编辑修改
                    this.$api.updateShippings(this.selectedAddressId,tempParams).then(res=>{
                        if(res.status == 0){
                            this.showEditorModal = false;
                            this.actionType = -1;
                            this.selectedAddressId = -1;
                            this.getAddressList();
                        }else{
                            this.actionType = -1;
                            this.selectedAddressId = -1;
                            this.$router.push('/login');
                        }
                    });
                }
            }
        },
        //效验表单
        checkForm(params){
            let tipError = '';
            if(!params.name){
                tipError = "请输入收货人名称";
            }else if(!params.phone || !/\d{11}/.test(params.phone)){
                tipError = '请输入正确格式的手机号';
            }else if(!params.province){
                tipError = '请选择省份';
            }else if(!params.city){
                tipError = '请选择对应的城市';
            }else if(!params.district){
                tipError = '请选择对应的区';
            }else if(!params.street || !params.street){
                tipError = '请输入收货地址';
            }else if(!/\d{6}/.test(params.postal)){
                tipError = '请输入六位邮编';
            }
            if(tipError){
                this.$message.error(tipError);
                return false;
            }
            return true;
        },
        //地址选中事件
        selectedHandler(id,idx){
            this.currenAddrIndex = idx;
            this.selectedAddressId = id;
        },
        //跳转结算
        gotoPayHandler(){
            let hasSelectAddr = this.addressDataList[this.currenAddrIndex];
            if(!hasSelectAddr){
                this.$message.warning('请选择一个地址再进行结算');
            }else if(this.selectedAddressId <= 0){
                this.$message.warning('请选择一个地址再进行结算');
            }
            else if(this.shopCarDataList.length > 0){
                this.$api.postCreateOrders({
                    shippingId:this.selectedAddressId
                }).then(res=>{
                    if(res.status == 0){
                        this.orderNo = res.data.orderNo;
                        this.$router.push(`/order/orderpay/${this.orderNo}`);
                    }else{
                        this.$message.error(res.msg);
                    }
                });
            }
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../../../assets/less/config.less");
    @import url("../../../assets/less/mixin.less");
    .confirm-main{
        background-color:@colorJ;
        padding-top: 30px;
        padding-bottom: 84px;
        .order-box{
            background-color: @colorG;
            padding-left: 40px;
            padding-bottom: 40px;
            .address-box{
                padding-top: 38px;
                .adr-box-title{
                    font-size: @fontG;
                    color:@colorB;
                    font-weight: 200;
                    margin-bottom: 21px;
                }
                .address-list{
                    .addr-item{
                        box-sizing: border-box;
                        float: left;
                        width: 271px;
                        height: 180px;
                        border: 1px solid @colorH;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        padding: 15px 24px;
                        font-size: @fontJ;
                        color: #757575;
                        cursor: pointer;
                        &.checked{
                            border: 1px solid @colorA;
                        }
                        .item-title{
                            height: 27px;
                            font-size: @fontH;
                            font-weight: 300;
                            color: @colorB;
                            margin-bottom: 10px;
                        }
                        .item-address{
                            height: 50px;
                        }
                        .item-bottom{
                            height: 50px;
                            line-height: 50px;
                            a{
                                .icon{
                                    width: 20px;
                                    height: 20px;
                                    fill:@colorC;
                                    vertical-align: middle;
                                    transition: fill .3s;
                                    &:hover{
                                        fill: @colorA;
                                        transition: fill .3s;
                                    }
                                }
                            }
                        }
                        .item_wrap{
                            box-sizing: border-box;
                            .item_one{
                                margin-bottom: 10px;
                                input{
                                    display: inline-block;
                                    width: 260px;
                                    height: 40px;
                                    line-height: 40px;
                                    padding-left: 15px;
                                    border: 1px solid @colorH;
                                    &:first-child{
                                        margin-right: 10px;
                                    }
                                }
                            }
                            .item_two{
                                margin-bottom: 10px;
                                select{
                                    margin-right: 10px;
                                    display: inline-block;
                                    width: 100px;
                                    height: 30px;
                                    margin-top: 5px;
                                }
                            }
                            .item_three{
                                margin-bottom: 10px;
                                textarea{
                                    width: 100%;
                                    height: 50px;
                                }
                            }
                            .item_four{
                                input{
                                    display: inline-block;
                                    width: 260px;
                                    height: 40px;
                                    line-height: 40px;
                                    padding-left: 15px;
                                    border: 1px solid @colorH;
                                }
                            }
                        }
                    }
                    .addr-add{
                        box-sizing: border-box;
                        float: left;
                        width: 271px;
                        height: 180px;
                        border: 1px solid #e5e5e5;
                        margin-right: 15px;
                        padding: 15px 24px;
                        font-size: @fontJ;
                        text-align: center;
                        color:@colorD;
                        cursor: pointer;
                        .add-icon{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: url(/imgs/icon-add.png) #e0e0e0 no-repeat 50%;
                            background-size: 14px;
                            margin: 0 auto;
                            margin-top: 45px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
            .goods-box{
                margin-top: 34px;
                border-bottom: 1px solid @colorH;
                padding-bottom: 12px;
                ul{
                    li{
                        display: flex;
                        align-items: center;
                        height: 40px;
                        line-height: 40px;
                        margin-top: 10px;
                        font-size: @fontI;
                        color: @colorB;
                        border-bottom: 1px solid @colorJ;
                        &:last-child{
                            border-bottom: none;
                        }
                        .good-name{
                            flex: 5;
                            img{
                                width: 30px;
                                height: 30px;
                                vertical-align: middle;
                            }
                        }
                        .good-price{
                            flex: 2;
                        }
                        .good-total{
                            padding-right: 44px;
                            color:@colorA;
                        }
                    }
                }
            }
            .distribution-box{
                margin-top: 31px;
                line-height: 20px;
                h2{
                    display: inline-block;
                    margin-right: 71px;
                    font-size: @fontG;
                    width: 80px;
                }
                span{
                    font-size: @fontI;
                    color:@colorA;
                    margin-right: 23px;
                }
            }
            .detail-box{
                padding: 50px 44px 33px 0;
                border-bottom: 1px solid @colorJ;
                text-align: right;
                font-size: @fontI;
                color: @colorC;
                .item-detail{
                    line-height: 15px;
                    margin-bottom: 12px;
                    .item-detail-val{
                        display: inline-block;
                        width: 100px;
                        color:@colorA;
                    }
                    .item-detail-total{
                        display: inline-block;
                        min-width: 100px;
                        color:@colorA;
                        font-size: @fontC;
                    }
                }
            }
            .btn-box{
                margin-top: 37px;
                text-align: right;
                .back-car{
                    .btnSet(202px,50px,@colorL);
                    font-size: @fontI;
                }
                .go-total{
                    .btnSet(202px,50px);
                    font-size: @fontI;
                }
            }
        }
    }
</style>