import { InvalidEsopTypeError, InvalidTypeError, PriceOrQuantityNotPositiveError } from "../exceptions/GlobalExceptions";

class ValidateFormData{
    constructor(customDocument){
        this.customDocument = customDocument;
    }
    validateForm = ()=>{
        let quantity = this.customDocument.getElementById("esop-quantity").value;
        let price = this.customDocument.getElementById("esop-price").value;
        let type = this.customDocument.getElementById("esop-order-type").value;

        if(parseInt(quantity) <= 0 || parseInt(price) <= 0){
            throw new PriceOrQuantityNotPositiveError();
        }
        if(type !== "BUY" && type !== "SELL"){
            throw new InvalidTypeError();
        }
        if(this.customDocument.getElementById("esop-type") != null){
            let esopType = this.customDocument.getElementById("esop-type").value;
            if(esopType !== "PERFORMANCE" && esopType !== "NON_PERFORMANCE"){
                throw new InvalidEsopTypeError();
            }
        }
    }
}

export {ValidateFormData};