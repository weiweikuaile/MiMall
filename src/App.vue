<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import jsonp from 'jsonp'
//import storage from './storage/index';//可省略/index
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
//拉取用户信息
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //to-do 保存到vuex里面 
        this.$store.dispatch('saveUserName',res.username);
      })
    },
//获取购物车商品数量
    getCartCount(){
      //console.log('我是App.vue里的getCartCount()');
      this.axios.get('/carts/products/sum').then((res=0)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss'; 
</style>
