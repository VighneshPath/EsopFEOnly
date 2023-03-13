class OrderHistoryApi{
    constructor(apiClient){
        this.apiClient = apiClient
    }
    getOrderHistory=(successFunction, failureFunction)=>{
        this.apiClient.get("http://localhost:8080/user/vighnesh/orderHistory")
        .then((response)=>{
            successFunction(response.data);
        })
        .catch((error)=>{
            failureFunction(error.response.data);
        })
    }
}

export {OrderHistoryApi};