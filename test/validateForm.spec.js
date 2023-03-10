import { CustomDocument } from "../src/scripts/documents/CustomDocument";
import { InvalidEsopTypeError, InvalidTypeError, PriceOrQuantityNotPositiveError } from "../src/scripts/exceptions/GlobalExceptions";
import { Order } from "../src/scripts/order/Order";
import { ValidateFormData } from "../src/scripts/order/ValidateFormData";

describe("should test Order", ()=>{
    let customDoc = new CustomDocument();
    beforeEach(()=>{
        spyOn(customDoc, 'addEventListener').and.returnValue(true);
    })
    it("should throw an error on negative price", ()=>{
        spyOn(customDoc, 'getElementById').withArgs('esop-price').and.returnValue({value:'-1'})
        .withArgs('esop-quantity').and.returnValue({value:'1'})
        .withArgs('esop-order-type').and.returnValue({value:'BUY'})
        .withArgs('esop-type').and.returnValue(null);
        let formValidator = new ValidateFormData(customDoc);

        expect(()=>formValidator.validateForm()).toThrow(new PriceOrQuantityNotPositiveError());
    });

    it("should throw an error on esop order type when not buy or sell", ()=>{
        spyOn(customDoc, 'getElementById').withArgs('esop-price').and.returnValue({value:'1'})
        .withArgs('esop-quantity').and.returnValue({value:'1'})
        .withArgs('esop-order-type').and.returnValue({value:'abtss'})
        .withArgs('esop-type').and.returnValue(null);
        let formValidator = new ValidateFormData(customDoc);

        expect(()=>formValidator.validateForm()).toThrow(new InvalidTypeError());
    });

    it("should throw an error on esop type is not perf or non perf", ()=>{
        spyOn(customDoc, 'getElementById').withArgs('esop-price').and.returnValue({value:'1'})
        .withArgs('esop-quantity').and.returnValue({value:'1'})
        .withArgs('esop-order-type').and.returnValue({value:'BUY'})
        .withArgs('esop-type').and.returnValue({value: "asa"});
        let formValidator = new ValidateFormData(customDoc);

        expect(()=>formValidator.validateForm()).toThrow(new InvalidEsopTypeError());
    });
})