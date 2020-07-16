let baseURL;
switch (process.env.NODE_ENV){
  case 'development':
    //baseURL='http://39.108.8.219/php-api/chat.php/api';
    baseURL='https://dev-mall-pre.springboot.cn/api';
    break;
case 'te_st':
    baseURL='https://te_st-mall-pre.springboot.cn/api';
    break;
case 'test':
    baseURL='https://test-mall-pre.springboot.cn/api';
    break;
case 'prev':
    baseURL='https://prev-mall-pre.springboot.cn/api';
    break;
case 'prod':
    baseURL='https://mall-pre.springboot.cn/api';
    break;
default:
    baseURL='https://mall-pre.springboot.cn/api';
    break;    
}
export default {
    baseURL
}