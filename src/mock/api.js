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
            "productSelected": true,
        }
    ],
    "selectedAll": true,
    "cartTotalPrice": 10198.33,
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
//门户_收货地址接口5.地址列表GET /shippings
//模拟get请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/api/shippings','get',function(option){
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 4,
                "userId": 13,
                "receiverName": "geely",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066385000,
                "updateTime": 1485066385000
            },
            {
                "id": 5,
                "userId": 13,
                "receiverName": "AAA",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066392000,
                "updateTime": 1485075875000
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
  })
});
//门户_收货地址接口1.添加地址POST /shippings
//模拟post请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/api/shippings','post',function(option){
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "msg": "新建地址成功",
    "data": {
        "shippingId": 28
    }
  })
});
//门户_收货地址接口 2.删除地址DELETE /shippings/{shippingId} DELETE /shippings/28
//根据不同的id值获取对应的数据,接口是/正则表达式/,模拟delete请求,外层Mock只负责拦截接口和方法的定义
Mock.mock(/\/api\/shippings\/(\d+)/,'delete',function(option){
  //console.log(option)
  //let id=/\/api\/shippings\/(\d+)/.exec(option.url)//通过正则表达式提取到url后面的id
  //console.log(id)
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "data":  {
      "pageNum": 1,
      "pageSize": 10,
      "size": 2,
      "orderBy": null,
      "startRow": 1,
      "endRow": 2,
      "total": 2,
      "pages": 1,
      "list": [
          {
              "id": 4,
              "userId": 13,
              "receiverName": "geely",
              "receiverPhone": "010",
              "receiverMobile": "18688888888",
              "receiverProvince": "北京",
              "receiverCity": "北京市",
              "receiverDistrict": "海淀区",
              "receiverAddress": "中关村",
              "receiverZip": "100000",
              "createTime": 1485066385000,
              "updateTime": 1485066385000
          }
      ],
      "firstPage": 1,
      "prePage": 0,
      "nextPage": 0,
      "lastPage": 1,
      "isFirstPage": true,
      "isLastPage": true,
      "hasPreviousPage": false,
      "hasNextPage": false,
      "navigatePages": 8,
      "navigatepageNums": [
          1
      ]
    }
  })

});
//门户_收货地址接口 3.登录状态更新地址PUT /shippings/{shippingId}
//根据不同的id值获取对应的数据,接口是/正则表达式/,模拟delete请求,外层Mock只负责拦截接口和方法的定义
Mock.mock(/\/api\/shippings\/(\d+)/,'put',function(option){
  //console.log(option)
  //let id=/\/api\/shippings\/(\d+)/.exec(option.url)//通过正则表达式提取到url后面的id
  //console.log(id)
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "msg": "更新地址成功"
  })

});

//门户_收货地址接口 4.选中查看具体的地址GET /shippings/{shippingId} 比5多了/{shippingId}
//根据不同的id值获取对应的数据,接口是/正则表达式/,模拟delete请求,外层Mock只负责拦截接口和方法的定义
Mock.mock(/\/api\/shippings\/(\d+)/,'get',function(option){
  //console.log(option)
  //let id=/\/api\/shippings\/(\d+)/.exec(option.url)//通过正则表达式提取到url后面的id
  //console.log(id)
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "data":  {
        "id": 4,
        "userId": 13,
        "receiverName": "geely",
        "receiverPhone": "010",
        "receiverMobile": "18688888888",
        "receiverProvince": "北京",
        "receiverCity": "北京市",
        "receiverDistrict": "海淀区",
        "receiverAddress": "中关村",
        "receiverZip": "100000",
        "createTime": 1485066385000,
        "updateTime": 1485066385000
    }
  })

});
//门户_订单接口 1.创建订单POST /orders
//模拟post请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/api/orders','post',function(option){
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0, 
    "data": {
      "orderNo": 1485158223095,
      "payment": 2999.11,
      "paymentType": 1,
      "postage": 0,
      "status": 10,
      "paymentTime": null,
      "sendTime": null,
      "endTime": null,
      "closeTime": null,
      "createTime": 1485158223095,
      "orderItemVoList": [
          {
              "orderNo": 1485158223095,
              "productId": 2,
              "productName": "oppo R8",
              "productImage": "mainimage.jpg",
              "currentUnitPrice": 2999.11,
              "quantity": 1,
              "totalPrice": 2999.11,
              "createTime": null
          }
      ],
      "shippingId": 5,
      "shippingVo": null
    }
  })
});
//门户_订单接口 3.订单详情 GET /orders/{orderNo}
//模拟get请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock(/\/api\/orders\/(\d+)/,'get',function(option){
  //console.log(option)
  //let id=/\/api\/orders\/(\d+)/.exec(option.url)//通过正则表达式提取到url后面的id
  //console.log(id)
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status":0,  
    "data": {
      "orderNo": 1480515829406,
      "payment": 30000.00,
      "paymentType": 1,
      "paymentTypeDesc": "在线支付",
      "postage": 0,
      "status": 10,
      "statusDesc": "未支付",
      "paymentTime": "",
      "sendTime": "",
      "endTime": "",
      "closeTime": "",
      "createTime": "2016-11-30 22:23:49",
      "orderItemVoList": [
        {
          "orderNo": 1480515829406,
          "productId": 1,
          "productName": "iphone7",
          "productImage": "/imgs/item-box-1.png",
          "currentUnitPrice": 10000.00,
          "quantity": 1,
          "totalPrice": 10000.00,
          "createTime": "2016-11-30 22:23:49"
        },
        {
          "orderNo": 1480515829406,
          "productId": 2,
          "productName": "oppo R8",
          "productImage": "/imgs/item-box-2.png",
          "currentUnitPrice": 20000.00,
          "quantity": 1,
          "totalPrice": 20000.00,
          "createTime": "2016-11-30 22:23:49"
        }
      ],
      "imageHost": "http://img.happymmall.com/",
      "shippingId": 3,
      "receiverName": "geely",
      "shippingVo": {
        "receiverName": "geely",
        "receiverPhone": "0100",
        "receiverMobile": "186***10585",
        "receiverProvince": "北京",
        "receiverCity": "北京市",
        "receiverDistrict": "昌平区",
        "receiverAddress": "矩阵小区",
        "receiverZip": "100000"
      }
    }
  })  
});
//门户_支付接口1.支付 POST /pay
//模拟post请求,外层的Mock只负责拦截接口和方法的定义
Mock.mock('/api/pay','post',function(option){
  //模拟假数据需要重新写Mock
  return Mock.mock({
    "status": 0,
    "data": {
      "content": "http://"
    }
  })
});