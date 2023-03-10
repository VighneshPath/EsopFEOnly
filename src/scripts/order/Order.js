class Order{
    constructor(orderApi, customDocument){
        this.orderApi = orderApi;
        this.customDocument = customDocument;
    }
    placeOrder = (orderData)=>{
        console.log(this.orderApi);
        this.orderApi.placeOrder(orderData, this.success, this.failure);
    }

    success = (data)=>{
        this.removeForm();
        this.clearErrorDiv();
        this.addOrderSuccessResponse(data);
    }

    clearErrorDiv = ()=>{
        let orderResponseDiv = this.customDocument.getElementById("order-failure");
        orderResponseDiv.innerHTML = "";
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