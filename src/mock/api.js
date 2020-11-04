import Mock from 'mockjs';
//门户_用户接口1.登录 POST
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|1-3": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});
//门户_用户接口4.获取登录用户信息
Mock.mock('/api/user',{
  "status": 0,
  "data": {
    "id|1-3": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});
//门户_购物车接口1.购物车List列表 GET 2.购物车添加商品 POST
Mock.mock('/api/carts',{
  "status": 0,
  "data": {
    "cartProductVoList": [
        {
            "id": 1,
            "userId": 13,
            "productId": 1,
            "quantity": 1,
            "productName": "iphone7",
            "productSubtitle": "双十一促销",
            "productMainImage": "/imgs/item-box-3.jpg",
            "productPrice": 7199.22,
            "productStatus": 1,
            "productTotalPrice": 7199.22,
            "productStock": 6,
            "productSelected": true,
        },
        {
            "id": 2,
            "userId": 13,
            "productId": 2,
            "quantity": 1,
            "productName": "oppo R8",
            "productSubtitle": "oppo促销进行中",
            "productMainImage": "/imgs/item-box-2.png",
            "productPrice": 2999.11,
            "productStatus": 1,
            "productTotalPrice": 2999.11,
            "productStock": 8,
            "productSelected": false,
        }
    ],
    "selectedAll": false,
    "cartTotalPrice": 7199.22,
    "cartTotalQuantity":2
  }
});
//门户_购物车接口5.全选中 PUT
Mock.mock('/api/carts/selectAll',{
  "status": 0,
  "data": {
    "cartProductVoList": [
        {
            "id": 1,
            "userId": 13,
            "productId": 1,
            "quantity": 1,
            "productName": "iphone7",
            "productSubtitle": "双十一促销",
            "productMainImage": "/imgs/item-box-3.jpg",
            "productPrice": 7199.22,
            "productStatus": 1,
            "productTotalPrice": 7199.22,
            "productStock": 86,
            "productSelected": true,
        },
        {
            "id": 2,
            "userId": 13,
            "productId": 2,
            "quantity": 1,
            "productName": "oppo R8",
            "productSubtitle": "oppo促销进行中",
            "productMainImage": "/imgs/item-box-2.png",
            "productPrice": 2999.11,
            "productStatus": 1,
            "productTotalPrice": 2999.11,
            "productStock": 86,
            "productSelected": true,
        }
    ],
    "selectedAll": true,
    "cartTotalPrice": 10198.33,
    "cartTotalQuantity":2
  }
});
//门户_购物车接口6.全不选中 PUT
Mock.mock('/api/carts/unSelectAll',{
  "status": 0,
  "data": {
    "cartProductVoList": [
        {
            "id": 1,
            "userId": 13,
            "productId": 1,
            "quantity": 1,
            "productName": "iphone7",
            "productSubtitle": "双十一促销",
            "productMainImage": "/imgs/item-box-3.jpg",
            "productPrice": 7199.22,
            "productStatus": 1,
            "productTotalPrice": 7199.22,
            "productStock": 86,
            "productSelected": false,
        },
        {
            "id": 2,
            "userId": 13,
            "productId": 2,
            "quantity": 1,
            "productName": "oppo R8",
            "productSubtitle": "oppo促销进行中",
            "productMainImage": "/imgs/item-box-2.png",
            "productPrice": 2999.11,
            "productStatus": 1,
            "productTotalPrice": 2999.11,
            "productStock": 86,
            "productSelected": false,
        }
    ],
    "selectedAll": false,
    "cartTotalPrice": 0,
    "cartTotalQuantity":2
  }
});
//门户_购物车接口7.获取购物中所有商品数量总和GET /carts/products/sum
Mock.mock('/api/carts/products/sum',{
  "status": 0,
  "data": 8
});
/* this.list=res.cartProductVoList || [];
this.allChecked=res.selectedAll;//是否全选
this.cartTotalPrice=res.cartTotalPrice;//商品总金额
this.checkedNum=res.cartTotalQuantity;//选中商品数量*/
//门户_购物车接口4.移除购物车某个产品DELETE /carts/{productId}
//根据不同的id值获取对应的数据,接口是/正则表达式/,模拟delete请求,外层Mock只负责拦截接口和方法的定义
Mock.mock(/\/api\/carts\/(\d+)/,'delete',function(option){
  //console.log(option)
  //let id=/\/api\/carts\/(\d+)/.exec(option.url)//通过正则表达式提取到url后面的id
  //console.log(id)
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "data": {
      "cartProductVoList": [
          {
              "id": 1,
              "userId": 13,
              "productId": 1,
              "quantity": 1,
              "productName": "iphone7",
              "productSubtitle": "双十一促销",
              "productMainImage": "/imgs/item-box-3.jpg",
              "productPrice": 7199.22,
              "productStatus": 1,
              "productTotalPrice": 7199.22,
              "productStock": 6,
              "productSelected": true,
          },
          {
              "id": 2,
              "userId": 13,
              "productId": 2,
              "quantity": 1,
              "productName": "oppo R8",
              "productSubtitle": "oppo促销进行中",
              "productMainImage": "/imgs/item-box-2.png",
              "productPrice": 2999.11,
              "productStatus": 1,
              "productTotalPrice": 2999.11,
              "productStock": 8,
              "productSelected": false,
          }
      ],
      "selectedAll": false,
      "cartTotalPrice": 7199.22,
      "cartTotalQuantity":2
    }
  })

});
//门户_用户接口11.退出登录POST /user/logout
//模拟post请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/api/user/logout','post',function(option){
	//模拟假数据需要重新写Mock  
  return Mock.mock({
        "status": 0,
        "msg": "退出成功"
    })
});