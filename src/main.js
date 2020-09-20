import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// Vue.use(VueAwesomeSwiper);
//import env from './env'
const mock=true;//定义一个mock开关 true是开,false是关.
if(mock){
  require('./mock/api');
}
//根据前端的跨域方式做调整 暂定是接口代理方式
//easy-mock官网上的mimall登录接口Base URL地址
//axios.defaults.baseURL='https://www.easy-mock.com/mock/5f1045f8025b1d4dbcfc9d49/mimall';
axios.defaults.baseURL='/api';//真实的和后台对接的接口
axios.defaults.timeout=8000;
//根据环境变量获取不同的请求地址和env.js配套使用
//axios.defaults.baseURL=env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;console.log('--我在main.js里打印不同接口时axios的返回值里data的值 如下');console.log(res);
  let path=location.hash;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    // if(path!='#/index'){
    //   window.location.href='/#/login';//后续会将涉及到用户个人信息等的页面做拦截，  
    // }
    //return Promise.reject(res);//如果有错误就是失败抛出异常 status非0的都要失败 detail.vue里测试 
  }else{
    alert(res.msg);//ElementUI的主键方式message弹窗错误消息
    return Promise.reject(res);
  }
});
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
