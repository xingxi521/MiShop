<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    //拉取用户数据
    this.getUser();
    //获取购物车数量
    this.getCarCount();
  },
  methods: {
    getUser(){
      this.$api.getUserData().then(res=>{
        if(res.status == 0){
          this.$store.commit('setUserName',res.data.username);
        }
      });
    },
    getCarCount(){
      this.$api.getCarCount().then(res=>{
        if(res.status == 0){
          this.$store.commit('setCarCount',res.data);
        }
      });
    }
  },
}
</script>
<style lang="less">
  @import url("./assets/less/reset.less");
</style>
