<template>
    <div>
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
    }
}
</script>