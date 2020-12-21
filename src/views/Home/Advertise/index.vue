<template>
    <div class="Advertise-main">
        <div class="advertise-top">
            <router-link to="/details/40"><img src="/imgs/ads/ads-1.png" alt=""></router-link>
            <router-link to="/details/41"><img src="/imgs/ads/ads-2.jpg" alt=""></router-link>
            <router-link to="/details/42"><img src="/imgs/ads/ads-3.png" alt=""></router-link>
            <router-link to="/details/43"><img src="/imgs/ads/ads-4.jpg" alt=""></router-link>
        </div>
        <div class="advertise-bottom">
            <router-link to="/details/40"><img src="/imgs/banner-1.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Advertise'
}
</script>
<style lang="less" scoped>
    .Advertise-main{
        margin-top: 15px;
        .advertise-top{
            display: flex;
            justify-content: space-between;
            a{
                display: inline-block;
                width: 296px;
                height: 167px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .advertise-bottom{
            margin-top: 15px;
            img{
                width: 100%;
            }
        }
    }
</style>