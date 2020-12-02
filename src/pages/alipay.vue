<template>  
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template> 
    </order-header>
    <loading v-if="loading"></loading>   
    <div class="form" v-html="content"></div>   
  </div>
</template> 
<script>
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
  export default{
    name:'alipay',
    data(){
      return {
        orderId:this.$route.query.orderId,
        content:'', //支付宝给的网关地址、签名等表单字符串 
        loading:true
      }  
    },
    mounted(){
      this.paySubmit();
    },
    components:{
      OrderHeader,
      Loading
    },
    methods:{
      paySubmit(){
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'Vue高仿小米商城', //扫码支付时订单名称
          amount:0.001, //单位元
          payType:1 //1支付宝，2微信
        }).then((res)=>{
          this.content=res.content;  
          setTimeout(()=>{
            document.forms[0].submit();//DOM模型获取 document.forms通过触发submit方法提交  
          },100)
        })  
      }  
    }
  }
</script>    
