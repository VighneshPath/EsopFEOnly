class OrderApis{
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    post = (url, data)=>{
        return this.apiClient.post(url, data, { withCredentials: true })
    }
}

export {OrderApis};