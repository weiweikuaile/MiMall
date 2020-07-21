<template>  
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="./#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                          <ul>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-1.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                          </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div> 
                </div>
                <div class="header-search">
                    <div class="wrapper">
                      <input type="text" name="keyword"/>
                      <a href="javascript:;"></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template> 
<script>
    export default{
        name:'nav-header'
    }
</script> 
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .header{
       .nav-topbar{
         height:39px;
         line-height: 39px;
         background-color: #333333;
         color:#B0B0B0;
         font-size:12px;
         .container{
            @include flex();
            a{
                display:inline-block;
                color:#B0B0B0;
                margin-right:17px;
            }
            .my-cart{
                width:110px;
                background-color: #FF6600;
                text-align: center;
                color:#ffffff;
                .icon-cart{
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');                    
                    margin-right: 4px;
                }
            }
            
             
         }  
       }//nav-topbar
       .nav-header{
         .container{ 
             position:relative;
             height:112px;
             @include flex();
             .header-logo{
                 display:inline-block;
                 width:55px;
                 height:55px;
                 background-color:#FF6600;
                 a{
                     display:inline-block;
                     width:110px;
                     height:55px;
                     &:before{
                         content:' ';
                         @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                         transition:margin .2s;
                     }//before
                     &:after{
                         content:' ';
                         @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                     }//after
                     &:hover:before{
                         margin-left:-55px;
                         transition:margin .2s;
                     }//hoberbefore
                    }//a
                }//header-logo
            
             .header-menu{
                 display:inline-block;
                 width:643px;
                 padding-left:209px;
                 .item-menu{
                    display:inline-block;
                    color:#333333;
                    font-weight:bold;
                    font-size:16px;
                    line-height:112px;
                    margin-left:20px;
                    span{
                      cursor:pointer;
                    }//span
                    &:hover{
                        color:$colorA;
                        .children{
                            height:220px;
                        }
                    }//hover
                    .children{
                        position:absolute;
                        top:112px;
                        left:0;
                        width:1226px;
                        border-top:1px solid #E5E5E5;
                        box-shadow:0px 7px 6px 0px rgba(0,0,0,0.11);
                        //z-index: 10;
                        //background-color: #ffffff;
                        .product{
                            position:relative;
                            float:left;
                            width:16.6%;
                            height:220px;
                            font-size:12px;
                            line-height:12px;
                            text-align: center;
                        
                         a{
                            display:inline-block;
                         }//a
                         img{
                            width:auto;
                            height:111px;
                            margin-top:26px;
                         }//img
                         .pro-img{
                            //width:264px;
                            height:137px;
                         }//pro-img
                         .pro-name{
                            font-weight:bold;
                            margin-top:19px;
                            margin-bottom:8px;
                            color:$colorB;
                         }//pro-name
                         .pro-price{
                            color:$colorA;
                         }//pro-price
                         &:before{
                            content:' ';
                            position:absolute;
                            top:28px;
                            right:0;
                            border-left:1px solid $colorF;
                            height:100px;
                            width:1px;
                         }//before
                         &:last-child:before{
                            display:none;
                         }//last-childbefore
                        }//product
                    }//children
                 }//item-menu
             }//header-menu
             
             .header-search{
                 width:319px;
                .wrapper{
                    height:50px;
                    border:1px solid #e0e0e0;
                    display:flex;
                    align-items: center;
                    input{
                        border:none;
                        border-right:1px solid #e0e0e0;
                        width:264px;
                        height:50px;
                        padding-left:14px;
                        box-sizing:border-box;
                    }//input
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left:17px;
                    }//a
                    
                }//wrapper 
             }//header-search
         
          }//container
       
       }//nav-header
    }//header
</style>   