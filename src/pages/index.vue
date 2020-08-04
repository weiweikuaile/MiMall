<template>  
    <div class="index">
        <div class="container">
            <div class="swiper-box">
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
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <Service-bar></Service-bar>
    </div>
</template> 
<script>

import ServiceBar from './../components/ServiceBar';
//import { swiper, swiperSlide} from 'vue-awesome-swiper'
//import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
//import 'swiper/css/swiper.css'//
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import 'swiper/swiper-bundle.css';
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
           ] 
        }//return
    },//data
  
    computed:{
        swiper(){
            //return this.$refs.mySwiper.swiper;//v3.1.3vue-awesome-swiper//报错
            //return '2';
            //return this.$refs.mySwiper.swiperInstance;
            //return this.$refs.mySwiper.$swiper;//v4.1.1vue-awesome-swiper
        }
    },
    mounted(){
        //console.log('this is current swiper instance object',this.swiper);
        //this.swiper.slideTo(2, 1000, true);//跳到指定图片开始轮播
    }
}//export

</script>
<style lang="scss">
.index{
    .swiper-box{
        .swiper-container{ 
            height:451px;
            img{
                width:100%;
                height:100%;
            }
           .swiper-pagination-bullet-active{
               background: #fff;
           }
  
        }  
    }
}
</style>    