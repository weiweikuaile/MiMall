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