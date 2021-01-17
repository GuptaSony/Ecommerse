import { environment } from '../../environments/environment';
export const UrlConstants = Object.freeze({

    BaseUrl: environment.baseUrl,
    Auth: {
        Post: {
            Login: '/api/User/UserAuthenticate'
        }
    },
    Product:{
        Get:{
            productCategoryList:'/api/Product/ProductCategoryList',
            PorductList:'/api/Product/ProductList', 
            ProductById:'/api/Product/ProductById',
            OrderById:'/api/Product/OrderById',
            OrderItemsByOrderId:'/api/Proudct/OrderItemsByOrderId' ,
            DeleteProduct:'/api/Product/ProductDelete'
        },
        Post:{
            ProductAddEdit:'/api/Product/ProductAddEdit',
            BuyerAdd:'/api/Product/BuyerAdd',
            OrderAdd:'/api/Product/OrderAdd'
        }
    }
});
