import {OrderApis} from "../api/OrderApis";

class Order{
    constructor(apiClient, customDocument){
        this.apiClient = apiClient;
        this.customDocument = customDocument;
    }
    placeOrder = (orderData)=>{
        let orderApis = new OrderApis(this.apiClient);

        let promise = orderApis.post("http://localhost:8080/user/vighnesh/order", orderData);
        promise.then((response)=>{
            this.success(response.data);
        }).catch((error)=>{
            this.failure(error.response.data);
        });
    }

    success = (data)=>{
        this.removeForm();
        this.addOrderSuccessResponse(data);
    }

    removeForm = ()=>{
        let formParent = this.customDocument.getElementById("main-content");
        let formElement = this.customDocument.getElementById("esop-form");
        formParent.removeChild(formElement);
    }

    addOrderSuccessResponse = (data)=>{
        let orderResponseDiv = this.customDocument.getElementById("order-success");
        let htmlToBeAdded = `<h1> Order Place Successfully </h1>`;
        for(const property in data){
            htmlToBeAdded += (`<p>`+property+` `);
            htmlToBeAdded += (data[property]+`</p>`);
        }
        orderResponseDiv.innerHTML = htmlToBeAdded;
    }

    failure = (data) =>{
        let orderResponseDiv = this.customDocument.getElementById("order-failure");
        let htmlToBeAdded = `<h1> Error in placing order </h1>`;
        for(const property in data.errors){
            htmlToBeAdded += (`<p>`+data.errors[property]+`</p>`);
        }
        orderResponseDiv.innerHTML = htmlToBeAdded;
    }
}

export {Order};