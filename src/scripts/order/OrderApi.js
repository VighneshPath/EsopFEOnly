class OrderApi{
    constructor(apiClient){
        this.apiClient = apiClient
    }
    placeOrder=(orderData, successFunction, failureFunction)=>{
        this.apiClient.post("http://localhost:8080/user/vighnesh/order", orderData)
        .then((response)=>{
            successFunction(response.data);
        })
        .catch((error)=>{
            failureFunction(error.response.data);
        })
    }
}

export {OrderApi};