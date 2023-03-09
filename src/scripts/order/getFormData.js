class GetFormData{
    constructor(customDocument){
        this.customDocument = customDocument;
    }
    getData = () => {
        let data =  {
            "quantity": this.customDocument.getElementById("esop-quantity").value,
            "price": this.customDocument.getElementById("esop-price").value,
            "type": this.customDocument.getElementById("esop-order-type").value
        }
        if((this.customDocument.getElementById("esop-type") != null)){
            data.esopType = this.customDocument.getElementById("esop-type").value;
        }

        return data;
    }
}

export {GetFormData};