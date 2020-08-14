import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
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
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';
  }else{
    alert(res.msg);//ElementUI的主键方式message弹窗错误消息
  }
});
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
