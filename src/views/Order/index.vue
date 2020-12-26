<template>
    <div>
        <shop-car-hander :title="headTitle">
            <template v-slot:body>
                <span>{{tip}}</span>
            </template>
        </shop-car-hander>
        <router-view></router-view>
        <ServerBar/>
        <Footer/>
    </div>
</template>
<script>
import ShopCarHander from '../../components/ShopCarHander'
import ServerBar from '../../components/ServerBar'
import Footer from '../../components/Footer'
export default {
    name:'Order',
    components:{
        ShopCarHander,
        ServerBar,
        Footer
    },
    data(){
        return{
            headTitle:'',
            tip:''
        }
    },
    mounted() {
        let path = this.$route.path;
        if(path == '/order'){
            this.headTitle = "确认订单";
            this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>";
        }
    },
}
</script>