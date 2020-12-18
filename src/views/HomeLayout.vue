<template>
    <div>
        <HomeHeader/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
export default {
    name:'HomeLayout',
    components:{
        HomeHeader,
        Footer
    }
}
</script>