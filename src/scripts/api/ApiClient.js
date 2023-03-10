class ApiClient{
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    post = (url, data)=>{
        return this.apiClient.post(url, data, { withCredentials: true })
    }
}

export {ApiClient};