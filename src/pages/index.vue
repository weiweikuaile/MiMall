<template>  
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                 <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub?'/#/product/'+sub.id:''">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub?sub.name:'小米9'}}
                                    </a>   
                                 </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            
                        </li>
                    </ul>
                </div>            
                    

             <swiper :options="swiperOptions" ref="mySwiper" v-if="slideList.length>1">
                 <swiper-slide v-for="(item,index) in slideList" :key="index">
                    <a :href="'/#/product/'+item.id"><img :src="item.img"></a>   
                 </swiper-slide>
                 <!-- optional controls -->
                 <div class="swiper-pagination" slot="pagination"></div>
                 <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
             </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a> 
            </div>
            <div class="banner">
                <a href="/#/product/38" >
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
        </div><!--index的container  -->
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(subitem,j) in arr" :key="j">
                                <span :class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img :src="subitem.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{subitem.name}}</h3>
                                    <p>{{subitem.subtitle}}</p>
                                    <p class="price">{{subitem.price}}元</p>
                                </div>
                            </div> 
                        </div>       
                    </div>
                </div><!--wrapper-->
            </div> <!--product-box的container  -->
        </div><!--product-box  -->
        <Service-bar></Service-bar>
    </div><!--index  -->
</template> 
<script>

import ServiceBar from './../components/ServiceBar';
//import { swiper, swiperSlide} from 'vue-awesome-swiper'
//import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
//import 'swiper/css/swiper.css'//
import 'swiper/dist/css/swiper.css';// If you use Swiper lower version 6.0.0
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import 'swiper/swiper-bundle.css';//If you use Swiper 6.0.0 or higher
// var mySwiper=new Swiper('.swiper-container',{
//         pagination:{
//             el:'.swiper-pagination',
//             //clickable:true,
//             type: 'fraction',
//         },
// });
export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,  
      ServiceBar
    },
    
    data() {
        return {
           swiperOptions:{
               loop : true,
               autoplay:true,
               speed:1000,
               pagination: {
                 el: '.swiper-pagination',
                 clickable:true,
                },
               effect:'cube',
               cubeEffect: {
                 slideShadows: true,
                 shadow: true,
                 shadowOffset: 100,
                 shadowScale: 0.6
                },
                navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
                },
            },//swiperOptions
           slideList:[
               {
                   id:'42',
                   img:'/imgs/slider/slide-1.jpg'
               },
               {
                   id:'45',
                   img:'/imgs/slider/slide-2.jpg'
               },
               {
                   id:'46',
                   img:'/imgs/slider/slide-3.jpg'
               },
               {
                   id:'47',
                   img:'/imgs/slider/slide-4.jpg'
               },
               {
                   id:'48',
                   img:'/imgs/slider/slide-5.jpg'
               }
           ],
           menuList:[
               [{
                   id:'30',
                   name:'小米CC9',
                   img:'/imgs/item-box-1.png'
               },{
                   id:'31',
                   name:'小米8青春版',
                   img:'/imgs/item-box-2.png'
               },{
                   id:'32',
                   name:'Redmi K20 Pro',
                   img:'/imgs/item-box-3.jpg'
               },{
                   id:'33',
                   name:'移动4G+专区',
                   img:'/imgs/item-box-4.jpg'
               }],
               [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
           ],
           adsList:[
               {
                   id:33,
                   img:'/imgs/ads/ads-1.png',
               },
               {
                   id:48,
                   img:'/imgs/ads/ads-2.jpg',
               },{
                   id:45,
                   img:'/imgs/ads/ads-3.png',
               },{
                   id:47,
                   img:'/imgs/ads/ads-4.jpg',
               }
           ],
           phoneList:[
               [1,1,1,1],[1,1,1,1]
           ] 
        }//return
    },//data
    mounted(){
        //console.log('this is current swiper instance object',this.swiper);
        //this.swiper.slideTo(2, 1000, true);//跳到指定图片开始轮播
        this.init();//初始化商品 加载商品列表
    },
    methods:{
        init(){
           this.axios.get('/products',{
               params:{
                   categoryId:100012,
                   pageSize:8
               }
           }).then((res)=>{
               this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)];//2维数组,每个数组有4个元素
           })
        }
    },
    computed:{
        swiper(){
            //return this.$refs.mySwiper.swiper;//v3.1.3vue-awesome-swiper//报错
            //return '2';
            //return this.$refs.mySwiper.swiperInstance;
            //return this.$refs.mySwiper.$swiper;//v4.1.1vue-awesome-swiper
        }
    },
    
}//export

</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.index{
    .swiper-box{
        .nav-menu{
            position:absolute;
            width:264px;
            height:451px;
            z-index:9;
            padding:26px 0;
            background-color:#55585a7a;
            box-sizing:border-box;
            
            .menu-wrap{
                .menu-item{
                    height:50px;
                    line-height:50px;
                  
                    a{
                        position: relative;
                        display:block;
                        font-size:16px;
                        color:#ffffff;
                        padding-left:30px;
                        &:after{
                            position:absolute;
                            right:30px;
                            top:17.5px;
                            content:' ';
                            @include bgImg(10px,15px,'/imgs/icon-arrow.png')

                        }
                    }
                    &:hover{
                        background-color:$colorA;
                        .children{
                             display:block; 
                        }
                    }
                    .children{
                        display:none;
                        width:962px;
                        height:451px;
                        background-color:$colorG;
                        position:absolute;
                        top:0;
                        left:264px;
                        border:1px solid $colorH;
                        ul{
                             display:flex;
                             justify-content:space-between;
                             height:75px;
                             li{
                                 height:75px;
                                 line-height:75px;
                                // width:241px;//可以用flex:1来代替，li更能均分ul宽度
                                 flex:1;
                                 padding-left:23px;
                             }//li
                             a{
                                 color:$colorB;
                                 font-size: 14px;
                             }
                             img{
                                 width:42px;
                                 height:35px;
                                 vertical-align:middle;
                                 margin-right:15px;
                             }
                        }//ul
                    }//children
                }//menu-item
            }
            
            
        }
        .swiper-container{ 
            height:451px;
            .swiper-button-prev{
                left:274px;
            }
            img{
                width:100%;
                height:100%;
            }
           .swiper-pagination-bullet-active{
               background: #fff;
           }
  
        }  
    }
    .ads-box{
        @include flex();
        margin-top:14px;
        margin-bottom:31px;
        a{
            
                width:296px;
                height:167px;
            
        }//a
    }//ads-box
    .banner{
        margin-bottom:50px;
    }
    .product-box{
        background-color:$colorJ;
        padding:30px 0 50px;
        h2{
            font-size:$fontF;
            height:21px;
            line-height:21px;
            color:$colorB;
            margin-bottom:20px;
        }
        .wrapper{
            display: flex;
            .banner-left{
                margin-right:16px;
                img{
                    width: 224px;
                    height: 619px;
                }
            }//banner-left
            .list-box{
                .list{
                    // display: flex;//用mixin.scss里的flex()方法代替
                    @include flex();
                    width:986px;
                    margin-bottom:14px;
                    &:last-child{
                        margin-bottom:0;
                    }
                    .item{
                        width:236px;
                        height:302px;
                        background-color:$colorG;
                        text-align:center;
                        span{
                            display: inline-block;
                            font-size:$fontJ;
                            line-height:24px;
                            width:67px;
                            height:24px;
                            color:$colorG;
                            &.new-pro{
                                background-color:#7ECF68;
                            }
                            &.kill-pro{
                                background-color:#E82626;
                            }
                        }//span
                        .item-img{
                            img{
                                height:195px;
                                width: 100%;
                            }
                        }//item-img
                        .item-info{
                            h3{
                              font-size:$fontJ;
                              line-height:$fontJ;
                              color:$colorB;
                              font-weight:bold;
                            }
                            p{
                            //   font-size:$fontK;//系统默认字体大小是12px所以可以省略不写。
                              line-height:13px;
                              color:$colorD;
                              margin:6px auto 13px;
                            }//p
                            .price{
                                  color:#F20A0A;
                                  font-size:$fontJ;
                                  //line-height:$fontJ;//
                                  //width:50px;//
                                  //height:13px;//
                                  font-weight:bold;
                                  cursor:pointer;
                                  &:after{
                                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                    content:' ';
                                    margin-left:5px;
                                    vertical-align:middle;

                                  }
                            }//price
                        }//item-info
                    }//item
                }//list
            }//list-box
        }//wrapper
    }//product-box
}//index
</style>    