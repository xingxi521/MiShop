<template>
    <div class="left-nav">
        <ul class="left-nav-wrap">
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">手机 电话卡</a>
                <div class="children">
                    <ul class="child-container" v-for="(item,index) in leftNavData" :key="index">
                        <li v-for="(data,idx) in item.data" :key="idx">
                            <router-link :to="'/details/'+data.id"><img :src="data.imgLink" alt=""><span class="child-title">{{data.name}}</span></router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">电视 盒子</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">笔记本 显示器</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">家电 擦线板</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">出行 穿戴</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">智能 路由器</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">电源 配件</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">健康 儿童</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">音响 耳机</a>
            </li>
            <li class="menu-item">
                <a href="javascript:;" class="menu-title">生活 箱包</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'LeftNav',
    data() {
        return {
            //mock二级菜单数据
            leftNavData:[
                {
                    data:[
                        {
                            id:40,
                            imgLink:'/imgs/nav-img/nav-1.png',
                            name:'小米10'
                        },
                        {
                            id:41,
                            imgLink:'/imgs/nav-img/nav-2.png',
                            name:'小米10'
                        },
                        {
                            id:42,
                            imgLink:'/imgs/nav-img/nav-3.png',
                            name:'小米10'
                        },
                        {
                            id:43,
                            imgLink:'/imgs/nav-img/nav-4.png',
                            name:'小米10'
                        },
                        {
                            id:44,
                            imgLink:'/imgs/nav-img/nav-5.png',
                            name:'小米10'
                        },
                        {
                            id:45,
                            imgLink:'/imgs/nav-img/nav-6.png',
                            name:'小米10'
                        }
                    ]
                },
                {
                    data:[
                        {
                            id:40,
                            imgLink:'/imgs/nav-img/nav-1.png',
                            name:'小米10'
                        },
                        {
                            id:41,
                            imgLink:'/imgs/nav-img/nav-2.png',
                            name:'小米10'
                        },
                        {
                            id:42,
                            imgLink:'/imgs/nav-img/nav-3.png',
                            name:'小米10'
                        },
                        {
                            id:43,
                            imgLink:'/imgs/nav-img/nav-4.png',
                            name:'小米10'
                        },
                        {
                            id:44,
                            imgLink:'/imgs/nav-img/nav-5.png',
                            name:'小米10'
                        },
                        {
                            id:45,
                            imgLink:'/imgs/nav-img/nav-6.png',
                            name:'小米10'
                        }
                    ]
                },
                {
                    data:[
                        {
                            id:40,
                            imgLink:'/imgs/nav-img/nav-1.png',
                            name:'小米10'
                        },
                        {
                            id:41,
                            imgLink:'/imgs/nav-img/nav-2.png',
                            name:'小米10'
                        },
                        {
                            id:42,
                            imgLink:'/imgs/nav-img/nav-3.png',
                            name:'小米10'
                        },
                        {
                            id:43,
                            imgLink:'/imgs/nav-img/nav-4.png',
                            name:'小米10'
                        },
                        {
                            id:44,
                            imgLink:'/imgs/nav-img/nav-5.png',
                            name:'小米10'
                        },
                        {
                            id:45,
                            imgLink:'/imgs/nav-img/nav-6.png',
                            name:'小米10'
                        }
                    ]
                },
                {
                    data:[
                        {
                            id:40,
                            imgLink:'/imgs/nav-img/nav-1.png',
                            name:'小米10'
                        },
                        {
                            id:41,
                            imgLink:'/imgs/nav-img/nav-2.png',
                            name:'小米10'
                        },
                        {
                            id:42,
                            imgLink:'/imgs/nav-img/nav-3.png',
                            name:'小米10'
                        },
                        {
                            id:43,
                            imgLink:'/imgs/nav-img/nav-4.png',
                            name:'小米10'
                        },
                        {
                            id:44,
                            imgLink:'/imgs/nav-img/nav-5.png',
                            name:'小米10'
                        },
                        {
                            id:45,
                            imgLink:'/imgs/nav-img/nav-6.png',
                            name:'小米10'
                        }
                    ]
                }
            ]
        }
    },
}
</script>
<style lang="less" scoped>
    @import url("../../../../assets/less/config.less");
    @import url("../../../../assets/less/public.less");
    @import url("../../../../assets/less/mixin.less");
    .left-nav{
        width: 236px;
        height: 460px;
        position: absolute;
        background-color: rgba(0,0,0,.3);
        z-index: 2;
        .left-nav-wrap{
            padding: 20px 0;
            height: 100%;
            box-sizing: border-box;
            position: relative;
            .menu-item{
                height: 42px;
                line-height: 42px;
                &:hover{
                    background-color: @colorA;
                }
                &:hover .children{
                    display: block;
                }
                .menu-title{
                    display: block;
                    padding-left: 30px;
                    color: #fff;
                    font-size: @fontJ;
                    position: relative;
                    &:after{
                        content: '';
                        .iconSet(16px,16px,'/imgs/icon-arrow.png');
                        position: absolute;
                        right: 15px;
                        top: 12px;
                    }
                }
                .children{
                    display: none;
                    position: absolute;
                    left: 236px;
                    top: 0;
                    width: 990px;
                    height: 100%;
                    background-color: #fff;
                    box-shadow: 10px 10px 10px #f5f5f5;
                    .child-container{
                        width: 247.5px;
                        height: 100%;
                        display: inline-block;
                        li{
                            height: 76px;
                            a{
                                padding: 16px;
                                display: block;
                                img{
                                    width: 60px;
                                    vertical-align: middle;
                                }
                                .child-title{
                                    color: @colorB;
                                    font-size: @fontJ;
                                    transition: color .2s;
                                }
                            }
                            &:hover .child-title{
                                color: @colorA;
                                transition: color .2s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>