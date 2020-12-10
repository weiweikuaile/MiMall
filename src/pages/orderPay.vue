<template>  
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template> 
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯~</h2>
              <p>请在<span>30分</span>内完成支付，超时后将取消订单</p>
              <p>收货信息：{{addressInfo}}</p>
            </div><!--order-info-->
            <div class="order-total">
              <p>应付总额：<span>{{payment}}</span>元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div><!--order-total-->   
          </div><!--item-order-->  
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderId}}</div>
            </div><!--item-->
            <div class="item">
              <div class="detail-title">收货信息：</div> 
              <div class="detail-info">{{addressInfo}}</div> 
            </div><!--item-->
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                    <li v-for="(item,index) in orderDetail" :key="index">
                      <img v-lazy="item.productImage" alt="">{{item.productName}}
                    </li>
                    <!-- <li><img src="/imgs/item-box-2.png" alt="">小米8青春版 标准高透贴膜 高透</li>
                    <li><img src="/imgs/item-box-3.jpg" alt="">小米8青春版 标准高透贴膜 高透</li> -->
                </ul>  
              </div><!--detail-info-->
            </div><!--item good-->
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div><!--item-->
          </div><!--item-detail-->
        </div><!--order-wrap-->
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p> 
            <div class="pay  pay-ali" :class="{'checked':payType==1}" @click="paySubmit(1)"></div>   
            <div class="pay  pay-wechat" :class="{'checked':payType==2}" @click="paySubmit(2)"></div> 
          </div><!--pay-way-->  
        </div><!--item-pay-->        
      </div><!--container--> 
    </div><!--wrapper-->
    <scan-pay-code v-if="showPay" @close="closePayModal" :img="payImg"></scan-pay-code>
    <modal
      title="支付确认"
      btnType="3"
      :showModal="showPayModal"
      sureText="查看订单"
      cancelText="未支付"
      @cancel="showPayModal=false"
      @submit="goOrderList"
    >
      <template v-slot:body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div><!--order-pay-->
</template> 
<script>
import OrderHeader from './../components/OrderHeader'
import QRCode from 'qrcode'
import ScanPayCode from './../components/ScanPayCode'
import Modal from './../components/Modal'
export default{
  name:'order-pay',
  data(){
    return{
      orderId:this.$route.query.orderNo,//订单号
      addressInfo:'',//收货人地址信息
      orderDetail:[],//订单详情,包含商品列表
      showDetail:false,//是否显示订单详情
      payType:'',//支付类型 默认空 不显示 
      showPay:false,//是否显示微信支付弹框
      payImg:'', //传参数(微信支付二维码图片) 默认为空
      showPayModal:false,//是否显示二次支付确认弹框
      T:'',//定时器ID
      payment:0,//订单的总金额
    }
  },
  mounted(){
      //console.log(this.$route.query.orderNo);
      this.getOrderDetail();
  },
  components:{
    OrderHeader,
    ScanPayCode,
    Modal
  },
  methods:{
    getOrderDetail(){//获取订单详情 接口3订单详情GET /orders/{orderNo}
      this.axios.get(`/orders/${this.orderId}`).then((res)=>{
        let item=res.shippingVo;//收货实体信息
        //拼接
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity}  ${item.receiverDistrict} ${item.receiverAddress}`
        this.orderDetail = res.orderItemVoList;//订单详情,包含商品列表
        this.payment=res.payment//获取订单的总金额
     })
    },
    paySubmit(payType){
      if(payType==1){
        window.open('/#/order/alipay?orderId='+this.orderId,'_blank');
      }else{
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'Vue高仿小米商城', //扫码支付时订单名称
          amount:0.000, //单位元
          payType:2 //1支付宝，2微信
        }).then((res)=>{//把返回的字符串(res.content),用插件QRCode转换成64位的图片 保存下来传给子组件ScanPayCode.vue进行渲染
          //console.log('微信的');console.log(res.content);
          QRCode.toDataURL(res.content)
          .then(url => {
            //console.log(url)//data:image/png;base64,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
            //显示微信支付弹框
            this.showPay=true;
            //传参数(微信支付二维码图片) 
            this.payImg=url;
            this.loopOrderState();//调用轮询
            
          })
          .catch(() => {
            //console.error(err)
            this.$message.error('微信二维码生成失败,请稍后重试');
          })//
          

          /***
          //不用插件QRCode转换成64位的图片 用个人的
          //显示微信支付弹框
          this.showPay=true;
          //传参数(微信支付二维码图片) 
          this.payImg="/imgs/pay/icon-qrcode1.png";
          ***/
        })
      }
    },
    //关闭微信支付弹框
    closePayModal(){
      //关闭微信支付弹框
      this.showPay=false;
      this.showPayModal=true;//显示二次支付确认弹框
      //清掉定时器
      clearInterval(this.T);    
    },
    //轮询当前订单支付状态
    loopOrderState(){
      //console.log('轮询');
      this.T=setInterval(()=>{
        //拉取订单的状态 如果用户付款,清掉定时器
        this.axios.get(`/orders/${this.orderId}`).then((res)=>{
          //console.log(res);
          if(res.status==20){
            clearInterval(this.T);//清掉定时器 否则会一直刷接口
            this.goOrderList();//自动跳转到订单列表页面orderList.vue.
          }

        })
      },1000);
    },
    goOrderList(){
      this.$router.push('/order/list');//点击"查看订单"按钮, 跳转到订单列表
    }  
  }
}
</script>
<style lang="scss">
  .order-pay{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:61px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size:14px;
        margin-bottom:30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background:url('/imgs/icon-gou.png') #80c58a no-repeat center;
            background-size:60px;
            margin-right:40px;  
          }  
          .order-info{
            margin-right: 248px;
            h2{
              font-size:24px;
              color:#333333;
              margin-bottom:20px;  
            }  
            p{
              color:#666666; 
              span{
                color:#FF6700;  
              } 
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;  
            }
            span{
              font-size:28px;
              color:#FF6700;  
            }
            .icon-down{
              display:inline-block;
              width:14px;
              height:10px;
              background:url('/imgs/icon-down.png') no-repeat center;
              background-size:contain;
              margin-left:9px;
              transition:all .5s;
              cursor:pointer;
              &.up{
                transform: rotate(180deg);
              }  
            } 
            // .icon-up{
            //   transform: rotate(180deg);  
            // }  
          }
        }
        .item-detail{
          border-top: 1px solid #D7D7D7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom:19px;
            .detail-title{
              float:left;
              width:100px;  
            }
            .detail-info{
              display:inline-block;
              img{
                width:30px; 
                vertical-align: middle; 
              }//img  
            }//detail-info  
          }//item  
        }//item-detail
      }//order-wrap
      .item-pay{
        padding:26px 50px 72px;
        background-color:#ffffff;
        color: #333333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          padding-bottom: 24px;
          border-bottom: 1px solid #D7D7D7;
          margin-bottom: 26px;   
        } 
        .pay-way{
          font-size:18px;
          .pay{
            display:inline-block;
            width:188px;
            height:64px;
            border:1px solid #D7D7D7;
            cursor:pointer;  
            &:last-child{
              margin-left:20px;  
            }
            &.checked{
              border:1px solid #FF6700;  
            }
          }
          .pay-ali{
            background:url('/imgs/pay/icon-ali.png') no-repeat center;  
            background-size:103px 38px;
            margin-top:19px;
          } 
          .pay-wechat{
            background:url('/imgs/pay/icon-wechat.png') no-repeat center;
            background-size:103px 38px;
          }   
        } 
      }  
    }  
  }
</style>    