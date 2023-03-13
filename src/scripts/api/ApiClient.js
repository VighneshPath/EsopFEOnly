class ApiClient{
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    post = (url, data)=>{
        return this.apiClient.post(url, data, { withCredentials: true })
    }

    get = (url)=>{
        return this.apiClient.get(url, { withCredentials: true })
    }
}

export {ApiClient};