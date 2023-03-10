import { Order } from "../src/scripts/order/Order";

describe("should test Order", ()=>{
    let customDoc = jasmine.createSpyObj('CustomDocument', ['getElementById', 'addEventListener']);
    beforeEach(()=>{
        customDoc.getElementById.and.returnValue(
            {
                innerHTML: "",
                removeChild : ()=>{
                    return true;
                }
            }
        );
        customDoc.addEventListener.and.returnValue(true);
        customDoc.getElementById.calls.reset();
    });

    it("should place an order, but it fails", ()=>{
        let dummyReturnData = {
            "errors":["User doesn't exist"]
        }
        let orderApiMock = jasmine.createSpyObj('OrderApi', ['placeOrder']);
        orderApiMock.placeOrder.and.callFake(function(orderData, successFunction, failureFunction){
            failureFunction(dummyReturnData);
        })
        let order = new Order(orderApiMock, customDoc);

        order.placeOrder({"quantity":1, "price":10, "type":"BUY"});

        expect(orderApiMock.placeOrder).toHaveBeenCalledTimes(1);
        expect(customDoc.getElementById).toHaveBeenCalledTimes(1);
    });

    it("should place a successful order", ()=>{
        let dummyReturnData = {
            "orderId":"1",
            "price":10,
            "quantity":1,
            "type":"BUY"
        }
        let orderApiMock = jasmine.createSpyObj('OrderApi', ['placeOrder']);
        orderApiMock.placeOrder.and.callFake(function(orderData, successFunction, failureFunction){
            successFunction(dummyReturnData);
        })
        let order = new Order(orderApiMock, customDoc);

        order.placeOrder({"quantity":1, "price":10, "type":"BUY"});

        expect(orderApiMock.placeOrder).toHaveBeenCalledTimes(1);
        expect(customDoc.getElementById).toHaveBeenCalledTimes(4);
    });
})