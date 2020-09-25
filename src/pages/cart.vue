<template>  
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示： 产品是否购买成功，以最终下单为准哦，请尽快结算</span>    
            </template>
        </order-header>
        <div class="wrapper">
          <div class="container">
            <div class="cart-box">
              <ul class="cart-item-head">
                <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
                <li class="col-3">商品名称</li>
                <li class="col-1">单价</li>
                <li class="col-2">数量</li>
                <li class="col-1">小计</li>
                <li class="col-1">操作</li>
              </ul>
              <ul class="cart-item-list">
                <li class="cart-item" v-for="(item,index) in list" v-bind:key="index">
                  <div class="item-check">
                    <!-- <span class="checkbox" v-bind:class="{'checked':}"></span> -->
                    <span class="checkbox" v-bind:class="{'checked':item.productSelected}" @click="supdateCart(item)"></span>
                  </div>
                  <div class="item-name">
                    <img v-lazy="item.productMainImage" alt="">
                    <span>{{item.productName+' , '+item.productSubtitle}}</span>
                  </div>
                  <div class="item-price">{{item.productPrice}}元</div>
                  <div class="item-num">
                    <div class="num-box">
                      <!--<a href="javascript:;">-</a>-->
                      <a href="javascript:;" @click="updateCart(item,'-')">-</a> 
                      <span>{{item.quantity}}</span>
                      <!--<a href="javascript:;">+</a>-->
                      <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                    </div>
                  </div>
                  <div class="item-total">{{item.productTotalPrice}}元</div>
                  <div class="item-del" @click="delProduct(item)"></div>
                </li>
              </ul>
            </div>
            <div class="order-wrap clearfix">
              <div class="cart-tip fl">
                <a href="/">继续购物</a>
                共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
              </div>
              <div class="total fr">
                合计：<span>{{cartTotalPrice}}</span>元
                <a href="javascript:;" class="btn" @click="order">去结算</a>
              </div>
            </div> 
          </div>
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template> 
<script>
    import OrderHeader from './../components/OrderHeader';
    import ServiceBar from './../components/ServiceBar';
    import NavFooter from './../components/NavFooter';
    export default{
        name:'cart',
        components:{
            OrderHeader,
            ServiceBar,
            NavFooter
        },
        data(){
          return{
              list:[],//商品列表
              allChecked:false,//是否全选
              cartTotalPrice:0,//商品总金额
              checkedNum:0//选中商品数量
          }
        },
        mounted(){
          this.getCartList();
        },
        methods:{
          // 获取购物车列表
          getCartList(){
            this.axios.get('/carts').then((res)=>{
              // console.log('开始cart.vue页面打印的');
              // console.log(res);
              // console.log('结束cart.vue页面打印的');
              //this.list=res.cartProductVoList || [];
              //this.allChecked=res.selectedAll;//是否全选
              //this.cartTotalPrice=res.cartTotalPrice;//商品总金额
              //this.checkedNum=res.cartTotalQuantity;//选中商品数量
              this.renderData(res);//公共赋值
            // console.log(this.list);
            // console.log(this.allChecked);
            // console.log(this.cartTotalPrice);
            //console.log(this.checkedNum);
            })
          },
          // 更新购物车某个产品数量和购物车单选状态
          supdateCart(item){
            let selected=item.productSelected;
            //console.log('原来购物车某个产品单选状态'+selected);
            //selected?false:true;//这个表达式不生效
            selected=!item.productSelected;
            //console.log('更新购物车某个产品单选状态'+selected);
            //如何赋值给每个产品单选状态
            item.productSelected=selected;
            this.checkedNum=this.list.filter(item=>item.productSelected).length;//选中商品件数
            //console.log('filter返回什么？'+JSON.stringify(this.list.filter(item=>item.productSelected)));//转成JSON格式 看里边的值
            // if(this.list.filter(item=>item.productSelected).length == this.list.length){//这个方法和every方法效果一样
            if(this.list.every(item=>item.productSelected)){//是否全选
              this.allChecked=true;//全选
              //this.cartTotalPrice=item.quantity*item.productPrice;
              this.cartTotalPrice=10198.33;//全选后 商品总金额
            }else{
              this.allChecked=false;//非全选
              let newArray=this.list.filter(item=>item.productSelected);
              //console.log(newArray.length);
              if(newArray.length!==0){//数组不为空时 有选中商品
                for(var i=0;i<newArray.length;i++){
                  this.cartTotalPrice=newArray[i].productTotalPrice;
                  //console.log(newArray[i].productTotalPrice);
                }
                 
              }else{
                this.cartTotalPrice=0;//数组为空时 商品总金额为0
              }

            }

          },
          //updateCart(){
           updateCart(item,type){
            console.log('更新购物车某个产品数量啦');
            // let selected=item.productSelected;
            // selected=!item.productSelected;
            // if(type=='-'){
            //    console.log('减购物车某个产品数量');
            // }else if(type=='+'){
            //   console.log('增购物车某个产品数量');
            // }else{
            //   selected=!item.productSelected;
            // }
          },
          // 删除购物车商品
          delProduct(item){
            console.log('删除购物车商品啦');
          },
          // 控制全选功能
          toggleAll(){
            console.log('购物车页面cart.vue控制全选功能');
            let url=this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
            this.axios.put(url).then((res)=>{
               this.renderData(res);
            })
          },
          // 公共赋值
          renderData(res){
            this.list=res.cartProductVoList || [];
            this.allChecked=res.selectedAll;//是否全选
            this.cartTotalPrice=res.cartTotalPrice;//商品总金额
              //this.checkedNum=res.cartTotalQuantity;//选中商品数量
            this.checkedNum=this.list.filter(item=>item.productSelected).length;//选中商品件数
          },
          // 购物车下单
          order(){
            console.log('页面跳转到订单页面/order/confirm');
          }  
          
        }
    }
</script>
<style lang="scss">
.cart{
  .wrapper{
    background-color: #F5F5F5;
    padding-top: 30px;
    padding-bottom: 114px;
    .cart-box{
      background-color: #fff;
      font-size: 14px;
      color: #999999;
      text-align: center;
      .checkbox{
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #E5E5E5;
        vertical-align: middle;
        margin-right: 17px;
        cursor: pointer;
        &.checked{
          background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
          background-size:16px 12px;
          border:none;
        }//&.checked
      }//checkbox
      .cart-item-head{
        display: flex;
        height: 79px;
        line-height: 79px;
        .col-1{
          flex: 1;
        }
        .col-2{
          flex: 2;
        }
        .col-3{
          flex: 3;
        }
      }//cart-item-head
      .cart-item-list{
        .cart-item{
          display: flex;
          align-items: center;
          height: 125px;
          border-top: 1px solid #E5E5E5;
          font-size: 16px;
          .item-check{
            flex: 1;
          }//item-check
          .item-name{
            flex: 3;
            font-size: 18px;
            color: #333333;
            display: flex;
            align-items: center;
            img{
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
            span{
              margin-left: 30px;
            }
          }//item-name
          .item-price{
            flex: 1;
            color: #333333;
          }
          .item-num{
            flex: 2;
            .num-box{
              display: inline-block;
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #E5E5E5;
              font-size: 14px;
              a{
                display: inline-block;
                width: 50px;
                color: #333333;
              }
              span{
                display: inline-block;
                width: 50px;
                color: #333333;
              }
            }//num-box
          }//item-num
          .item-total{
            flex: 1;
            color: #FF6600;
          }
          .item-del{
            flex: 1;
            width: 14px;
            height: 12px;
            background: url('/imgs/icon-close.png')no-repeat center;
            background-size: contain;
            cursor: pointer;
          }          
        }//cart-item
      }//cart-item-list
    }//cart-box
    .order-wrap{
      font-size: 14px;
      color: #666666;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      .cart-tip{
        margin-left: 29px;
        a{
          color: #666666;
          margin-right: 37px;
        }
        span{
          color: #FF6600;
          margin: 0 5px;
        }
      }//cart-tip
      .total{
        font-size: 14px;
        color: #FF6600;
        span{
          font-size: 24px;
        }
        a{
          width: 202px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          margin-left: 37px;
        }
      }//total
    }//order-wrap
  }//wrapper
}//cart
</style>    