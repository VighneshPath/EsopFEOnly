import {OrderApis} from "../api/orderApis";

class Order{
    constructor(apiClient, customDocument){
        this.apiClient = apiClient;
        this.customDocument = customDocument;
    }
    placeOrder = ()=>{
        let orderApis = new OrderApis(this.apiClient);

        orderApis.post("http://localhost:8080/order", {"hello": "there"});
    }
}

export {Order};