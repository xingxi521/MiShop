<template>
    <div class="loading-main">
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
        <slot name="body"></slot>
    </div>
</template>
<script>
export default {
    name:'Loading'
}
</script>
<style lang="less" scoped>
    .loading-main{
        text-align: center;
        img{
            width: 100px;
        }
        p{
            font-size: 20px;
        }
    }
</style>