<template>
    <div class="home-main">
        <div class="container">
            <HomeSwiper/>
            <Advertise/>
        </div>
        <Phone/>
        <ServerBar/>
    </div>
</template>
<script>
import ServerBar from '../../components/ServerBar'
import HomeSwiper from './HomeSwiper'
import Advertise from './Advertise'
import Phone from './Phone'
export default {
    name:'Home',
    components:{
        ServerBar,
        HomeSwiper,
        Advertise,
        Phone
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/public.less");
</style>