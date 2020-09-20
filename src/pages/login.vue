<template>
  <div class="login">
    <div class="container">
        <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
        <div class="container">
            <div class="login-form">
                <h3>
                    <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
                </h3>
                <div class="input">
                    <input type="text" placeholder="请输入帐号" v-model="username">
                </div>
                <div class="input">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="btn-box">
                    <a href="javascript:;" class="btn" @click="login">登录</a>
                </div>
                <div class="tips">
                    <div class="sms" @click="register">手机短信登录/注册</div>
                    <div class="reg">立即注册<span>|</span>忘记密码？</div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-link">
            <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
            <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
        </div>
        <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
    import {mapActions} from 'vuex';//[mapActions辅助函数用法]
    export default{
        name:'login',
        data(){
            return {
                username:'',
                password:'',
                userId:'',
                res:{}//
            }
        },//data
        
        methods:{
            login(){//登录方法
                let {username,password}=this;//data里的
                //调接口
                this.axios.post('/user/login',{//v-model冒号后的值:data里的
                    username,
                    password
                }).then((res)=>{
                    //this.res=res;//
                    // console.log(res);
                    // console.log(res.id);
                    // console.log(res.username);
                    this.$cookie.set('userId',res.id,{expires:'Session'});
		    //this.$cookie.set('userId',res.id,{expires:'1M'});//生效 1M代表1个月
                    // this.$cookie.set('username',res.username,{expires:'1M'});
                    // this.$cookie.set('password',res.password,{expires:'1M'});
                    //to-do保存用户名
                    this.$store.dispatch('saveUserName',res.username);//换成下一行代码[mapActions辅助函数用法]
                    //this.saveUserName(res.username);//[mapActions辅助函数用法]
                    //this.$router.push('/index');//跳转到首页
		    this.$router.push({
		    	name:'index',
			params:{
			  from:'login'
			}
		    });
                })
            },//login
            //...mapActions(['saveUserName']),//[mapActions辅助函数用法]
            register(){//注册方法
                
                //调接口
                this.axios.post('/user/register',{
                    username:'weiwork0001',
                    password:'weiwork0001',
                    email:'weiwork0001@163.com'
                }).then((res)=>{
                    alert('注册成功');
                })
            }//register
        }//methods
    }//export default
</script>
<style lang="scss">
    .login{
        &>.container{
            height:113px;
            img{
              width:auto;
              height:100%;
            }
        }
        .wrapper{
            background: url(/imgs/login-bg.jpg) no-repeat center;
            .container{//中间部分wrapper的container
                height: 576px;
                .login-form{//右边的登录框
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    width: 410px;
                    height: 510px;
                    background-color: #ffffff;
                    position: absolute;
                    bottom: 29px;
                    right: 0;
                    h3{
                        line-height: 23px;
                        font-size: 24px;
                        text-align: center;
                        margin: 40px auto 49px;
                        .checked{
                            color: #FF6600;
                        }
                        .sep-line{
                            margin: 0 32px;
                        }
                    }//h3
                    .input{
                        display: inline-block;
                        width: 348px;
                        height: 50px;
                        border: 1px solid #E5E5E5;
                        margin-bottom: 20px;
                        input{
                            width:100%;
                            height:100%;
                            border: none;
                            padding:18px;
                        }
                    }
                    .btn{
                        width: 100%;
                        line-height: 50px;
                        margin-top: 10px;
                        font-size: 16px;
                    }
                    .tips{
                        margin-top: 14px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                        cursor: pointer;
                        .sms{
                            color: #FF6600;
                        }
                        .reg{
                            color: #999999;
                            span{
                                 margin: 0 7px;
                            }
                        }
                    }
                }//login-form

            }//container
        }//wrapper
        .footer{//脚部的样式
                height: 100px;
                padding-top: 60px;
                color: #999999;
                font-size: 16px;
                text-align: center;
            .footer-link{//脚部的链接
                a{
                    color: #999999;
                    display: inline-block;
                }
                span{
                    margin: 0 10px;
                }
            }//footer-link
            .copyright{//版权样式
                margin-top: 13px;
            }//copyright
        }//footer
        
    }
</style>