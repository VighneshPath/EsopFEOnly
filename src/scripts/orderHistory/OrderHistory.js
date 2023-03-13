class OrderHistory{
    constructor(orderHistoryApi, customDocument){
        this.orderHistoryApi = orderHistoryApi;
        this.customDocument = customDocument;
    }

    getOrderHistory = ()=>{
        alert();
        this.orderHistoryApi.getOrderHistory(this.success, this.failure);

    }

    success = (data)=>{
        let tableBody = this.customDocument.getElementById("history-table-body");
        let finalOutput = "";
        for(const id in data){
            let output = `<tr>`;
            Object.keys(data[id]).forEach(function(key,i) {
                if (key == 'filled'){
                    output+=`<td colspan="2"><table>`;
                    for(const item in data[id][key]){
                        output+=`<tr>`;
                        Object.keys(data[id][key][item]).forEach(function(key1,i1){
                            console.log(key1);
                            if(key1 == "amount" || key1 == "quantity"){
                                output+=`<td>`+data[id][key][item][key1]+`</td>`;
                            }
                        });
                        output+=`</tr>`;
                    }
                    output+=`</table></td>`;
                }
                else{
                    output+=`<td>`+data[id][key]+`</td>`;
                }
            });     
            output += `</tr>`;
            console.log(output);
            finalOutput += output;
        }
        tableBody.innerHTML = finalOutput;
    }

    failure = (data)=>{
        console.log(data);
    }
}

export {OrderHistory}