<template>
    <div class="login-main">
        <div class="login_header">
            <div class="container">
                <router-link to="/"></router-link>
            </div>
        </div>
        <div class="login_wrap">
            <div class="login_box">
                <div class="box_header">
                    <a href="javascript:;" class="box_header_title">帐号登录</a>
                    <span class="line"></span>
                    <a href="javascript:;" class="box_header_sao">扫码登陆</a>
                </div>
                <div class="box_content">
                    <input type="text" placeholder="邮件/手机号码/小米ID" v-model="username">
                    <input type="text" placeholder="密码" v-model="password">
                    <button class="login-btn" @click="loginHandler">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods: {
        loginHandler(){
            this.$api.getLogin({
                username:this.username,
                password:this.password
            }).then(res=>{
                if(res.status == 0){
                    this.$cookie.set('userId', res.data.id, { expires: '1M' });
                    this.$store.commit('setUserName',res.data.username);
                    this.$api.getCarCount().then(result=>{
                        if(result.status == 0){
                            this.$store.commit('setCarCount',result.data);
                        }
                    });
                    this.$router.push('/');
                }else{
                    alert(res.msg);
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
    @import url("../../assets/less/config.less");
    @import url("../../assets/less/public.less");
    @import url("../../assets/less/mixin.less");
    .login-main{
        .login_header{
            height: 98px;
            .container{
                height: 98px;
                a{
                    display: block;
                    height: 98px;
                    background:url('/imgs/login-logo.png') no-repeat;
                }
            }
        }
        .login_wrap{
            background:url('/imgs/login-bg.jpg') no-repeat;
            background-position: top center;
            width: 100%;
            height: 588px;
            position: relative;
            .login_box{
                position: absolute;
                right: 390px;
                width: 410px;
                height: 360px;
                top: 49px;
                background: #fff;
                .box_header{
                    padding: 27px 0 24px;
                    text-align: center;
                    font-size: 24px;
                    color: #666;
                    .box_header_title{
                        color:@colorA;
                    }
                    .box_header_sao{
                        color:@colorC;
                    }
                    .line{
                        width: 1px;
                        height: 24px;
                        margin: 0 35px 0 42px;
                        border: 1px solid #e0e0e0;
                        background: #e0e0e0;
                    }
                }
                .box_content{
                    padding: 0 30px;
                    input{
                        display: block;
                        outline: none;
                        border: 1px solid @colorH;
                        width: 316px;
                        height: 22px;
                        padding: 13px 16px 13px 14px;
                        margin-bottom: 15px;
                    }
                    .login-btn{
                        .btnSet(348px,50px);
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>