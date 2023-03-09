class GetFormData{
    constructor(customDocument){
        this.customDocument = customDocument;
    }
    getData = (formElement) => {
        let orderQuantity = this.customDocument.getElementById("esop-quantity").value;
        let orderPrice = this.customDocument.getElementById("esop-price").value;
        let orderType = this.customDocument.getElementById("esop-order-type").value;

        console.log(orderQuantity +" "+orderPrice + " "+orderType);
    }
}

export {GetFormData};