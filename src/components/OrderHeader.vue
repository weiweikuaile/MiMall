<template>  
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
              <a href="./#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">用户名Jack</a>
                <!-- login.vue页面解决 无法登录后返回用户输入的用户名和密码bug后恢复下面代码 -->
                <!-- <a href="javascript:;">{{username}}</a> -->
                
            </div>    
        </div>
    </div>
</template> 
<script>
    import {mapState} from 'vuex';//[mapState辅助函数用法]
    export default{
        name:'order-header',
        props:{
          title:String
        },
        computed:{
            ...mapState(['username'])
        },
    }
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.order-header{
    padding:30px 0;
    //height:112px;
    //border:1px solid #666666;
    .container{
        //公共logo在base.scss里
        //单独私有的在本页面加
        .header-logo{
            float:left;
        }
        .title,.username{
            display:inline-block;
            height:55px;
            line-height:55px; 
        }
        .title{ 
            float:left;
            font-size:28px;
            color:#333333;  
            margin-left:54px;
            h2{
                span{
                    margin-left:17px;
                    font-size:14px;
                    color:#999999;
                    font-weight:bold;
                }
            }
 
        }
        .username{
            float:right;  
            a{
                font-size:16px;
                color:$colorC;
            }
           
        }
    }
    
}
</style>    