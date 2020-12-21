<template>
    <div class="home-main">
        <div class="container">
            <HomeSwiper/>
            <Advertise/>
        </div>
        <ServerBar/>
    </div>
</template>
<script>
import ServerBar from '../../components/ServerBar'
import HomeSwiper from './HomeSwiper'
import Advertise from './Advertise'
export default {
    name:'Home',
    components:{
        ServerBar,
        HomeSwiper,
        Advertise
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/public.less");
</style>