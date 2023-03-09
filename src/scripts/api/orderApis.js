class OrderApis{
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    post = (url, data)=>{
        return this.apiClient.get(url, data)
    }
}

export {OrderApis};