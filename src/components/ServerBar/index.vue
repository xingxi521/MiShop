<template>
    <div class="server-bar-main">
        <div class="container">
            <ul class="bar-wrap">
                <li>
                    <a href="#">
                        <span class="bar-tool"></span>
                        预约维修服务
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="bar-7day"></span>
                        7天无理由退货
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="bar-15day"></span>
                        15天免费换货
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="bar-post"></span>
                        满99元包邮
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'ServerBar'
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .server-bar-main{
        .container{
            .bar-wrap{
                display: flex;
                height: 80px;
                border-bottom: 1px solid #e0e0e0;
                li{
                    flex: 1;
                    height: 80px;
                    line-height: 80px;
                    text-align: center;
                    a{
                        color: @colorC;
                        font-size: @fontI;
                        transition: color .5s;
                        display: inline-block;
                        width: 100%;
                        height: 20px;
                        line-height: 0;
                        border-right: 1px solid #e0e0e0;
                        .bar-tool{
                            .iconSet(20px,20px,'/imgs/icon-setting.png');
                            vertical-align: middle;
                            margin-bottom: 2px;
                            margin-right: 7px
                        }
                        .bar-7day{
                            .iconSet(20px,20px,'/imgs/icon-7day.png');
                            vertical-align: middle;
                            margin-bottom: 2px;
                            margin-right: 7px
                        }
                        .bar-15day{
                            .iconSet(20px,20px,'/imgs/icon-15day.png');
                            vertical-align: middle;
                            margin-bottom: 2px;
                            margin-right: 7px
                        }
                        .bar-post{
                            .iconSet(20px,20px,'/imgs/icon-post.png');
                            vertical-align: middle;
                            margin-bottom: 2px;
                            margin-right: 7px
                        }
                    }
                    &:hover a{
                        color: @colorA;
                        transition: color .5s;
                    }
                }
            }
        }
    }
</style>