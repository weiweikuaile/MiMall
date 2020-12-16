<template>  
    <div class="order-list">
      <order-header title="订单列表">
        <template v-slot:tip>
          <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
        </template>
      </order-header>  
      <div class="wrapper">
        <div class="container">
          <div class="order-box">
            <Loading v-if="loading"></Loading>
            <div class="order" v-for="(order,index) in list" :key="index">
              <div class="order-title">
                <div class="item-info fl">
                  {{order.createTime}}
                  <span>|</span>
                  {{order.receiverName}}
                  <span>|</span>
                  订单号：{{order.orderNo}} 
                  <span>|</span>
                  {{order.paymentTypeDesc}}
                </div><!--item-info fl-->
                <div class="item-money fr">
                  <span>应付金额：</span>
                  <span class="money">{{order.payment}}</span>
                  <span>元</span>
                </div><!--item-money fr-->
              </div><!--order-title-->
              <div class="order-content clearfix">
                <div class="good-box fl">
                  <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                    <div class="good-img">
                      <img v-lazy="item.productImage" alt="">
                    </div>
                    <div class="good-name">
                      <div class="p-name">{{item.productName}}</div>
                      <div class="p-money">{{item.totalPrice + 'X' +item.quantity}}元</div>
                    </div>
                  </div>
                </div>
                <div class="good-state fr" v-if="order.status == 20">
                  <a href="javascript:;">{{order.statusDesc}}</a>
                </div>
                <div class="good-state fr" v-else>
                  <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
                </div>
              </div>
            </div><!--order-->
            <el-pagination
              v-if="true"
              class="pagination"
              background
              layout="prev, pager, next"
              :pageSize="pageSize"
              :total="total"
              @current-change="handleChange"
              >
            </el-pagination>
            <div class="load-more" v-if="false">
                <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
            </div>
            <div class="scroll-more" 
              v-infinite-scroll="scrollMore" 
              infinite-scroll-disabled="busy" 
              infinite-scroll-distance="440"
              v-if="false"
            >
              <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
            </div>  
            <no-data v-if="!loading && list.length==0"></no-data> 
          </div><!--order-box-->
        </div><!--"container"-->
      </div><!--wrapper-->   
    </div>
</template> 
<script>
import OrderHeader from './../components/OrderHeader';
import Loading from './../components/Loading';
import NoData from './../components/NoData';
import { Pagination,Button } from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll';
    export default{
        name:'order-list',
        components:{
          OrderHeader,
          Loading,
          NoData,
          [Pagination.name]:Pagination,
          [Button.name]:Button
        },
        directives: {
          infiniteScroll
        },
        data(){
          return {
            loading:false,//数据还未返回来时,显示loading
            list:[],//订单列表 接口2获取到的数据
            pageSize:10,//每页10条记录
            pageNum:1,//当前页 默认第1页
            total:0,//总条目数
            showNextPage:true,//默认true显示 加载更多，是否显示按钮
            busy:false,//默认false开启 滚动条滚动触发"滚动加载" true是禁用滚动条滚动触发"滚动加载"
          }
        },
        mounted(){
          this.getOrderList();
        },
        methods:{
          getOrderList(){//获取订单列表 接口2.订单List GET /orders
            this.loading=true;//当点击的时候设置为true即 显示loading
            this.busy=true;//关闭滚动加载
            this.axios.get('/orders').then((res)=>{
          /*接口能用时再用这个params传参,现在mock无法模拟params带参,暂时用原来的不带参数的*/
          //   this.axios.get('/orders',{
          //     params:{
          //       pageSize:10,//每页10条记录
          //       pageNum:this.pageNum
          //     }
          //  }).then((res)=>{  
              this.loading=false;//接口请求回来后,关闭loading
              this.busy=false;//开启滚动加载
              //console.log(res.list)
              
              this.list=this.list.concat(res.list);//把第二页数据追加到第一页数据后边,使用拼接数组
              //this.list=res.list;
              //this.list=[]||res.list;//当没有数据时为空数组 测试NoData组件,测试结束后还原上一行代码
              this.total=res.total;
              this.showNextPage=res.hasNextPage;//有下一页就显示"加载更多"按钮；最后一页不显示"加载更多"按钮。
            }).catch(()=>{
              this.loading=false;
            })
          },
          goPay(orderNo){//三种路由跳转方式
            //第一种方式
            //this.$router.push('/order/pay');//跳转到订单列表
            //第三种方式
            /*this.$router.push({
              name:'order-pay',
              query:{
                orderNo
              }
            })*/
            //第二种方式
            this.$router.push({
              path:'/order/pay',
              query:{
                orderNo
              }
            })
          },
          //第一种分页方式:element官网Pagination分页
          handleChange(pageNum){
            this.pageNum=pageNum;
            this.getOrderList();
          },
          // 第二种分页方式:加载更多
          loadMore(){
            this.pageNum++;
            this.getOrderList();
          },
          //第三种分页方式:滚动加载 通过npm插件实现
          scrollMore(){
            this.busy=true;//默认false开启滚动条滚动触发"滚动加载";true是禁用滚动条滚动触发"滚动加载"
            setTimeout(() => {
              this.pageNum++;
              this.getList();//调试滚动加载时,需要注销这行代码
            }, 500);                          
          },
          //单独定义 专门给scrollMore使用 (类似getOrderList())
          getList(){//获取订单列表 接口2.订单List GET /orders
            this.loading=true;//当点击的时候设置为true即 显示loading
            this.axios.get('/orders').then((res)=>{
          /*接口能用时再用这个params传参,现在mock无法模拟params带参,暂时用原来的不带参数的*/
          //   this.axios.get('/orders',{
          //     params:{
          //       pageSize:10,//每页10条记录
          //       pageNum:this.pageNum
          //     }
          //  }).then((res)=>{ 
              this.loading=false;//请求回来时,关闭loading 
              //console.log(res.list) 
              this.list=this.list.concat(res.list);//把第二页数据追加到第一页数据后边,使用拼接数组
              //this.list=res.list;
              //this.list=[]||res.list;//当没有数据时为空数组 测试NoData组件,测试结束后还原上一行代码
              //如果有下一页 开启滚动加载;没有下一页 禁用滚动加载.
              if(res.hasNextPage){
                this.busy=false;//开启
              }else{
                this.busy=true;//禁用

              }
              
            });
          },
        }
    }
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size:20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        } 
        .pagination{
          text-align: right; 
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
          // color: #FFF;
        }
        .el-button--primary {
          //color: #FFF;
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }  
        
}
</style>    